/* Banshee — serverless chat function (Netlify).
   The OpenAI key lives ONLY here (server-side); it is never sent to the browser
   bundle. Guardrails are enforced in the system prompt AND by grounding every
   answer in the retrieved knowledge pack. Any failure — no key, timeout, upstream
   error — degrades gracefully to the deterministic offline engine, so Banshee
   always answers.

   Env:
     OPENAI_API_KEY   (required for live mode; absent → offline mode)
     BANSHEE_MODEL    (optional; default "gpt-4o-mini")
*/

import { retrieve, answerOffline } from "../../src/banshee/offline.js";
import { CONTACT_EMAIL, DIGITAL_TWIN } from "../../src/banshee/knowledge.js";

const MODEL = process.env.BANSHEE_MODEL || "gpt-4o-mini";
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const TIMEOUT_MS = 9000;
const MAX_HISTORY = 6;

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
    body: JSON.stringify(body),
  };
}

function buildSystem(contextEntries) {
  const context = contextEntries
    .map((e) => `### ${e.title} (page: ${e.path}${e.href ? `, external link: ${e.href}` : ""})\n${e.text}`)
    .join("\n\n");

  return [
    "You are Banshee, the expert AI guide and concierge for classHuman AI — a Generative AI Software Engineering, Development & Research company. You know classHuman deeply, and your job is to help every visitor understand what classHuman can do for them and take the right next step. Be a sharp, proactive teammate who genuinely wants them to succeed.",
    "",
    "HOW TO HELP — you have real latitude here:",
    "- Synthesize across the CONTEXT into one complete, connected answer. Don't just recite a single entry.",
    "- Be proactive: after answering, offer the most useful next step — a specific page to read, a demo to try, the founder's digital twin for a deeper personal conversation, or emailing a human to start a build.",
    "- If the visitor's need is unclear, ask ONE short clarifying question instead of guessing.",
    "- Warm, confident, concise — up to about 140 words. Plain language, a little announcing-'Banshee' character is welcome. No emoji.",
    "- Name any page you rely on so the visitor can open it.",
    "",
    "HARD LIMITS — never cross these:",
    "1. Ground every factual claim in the CONTEXT below. If a fact isn't there, say you don't have it from the site and offer the contact email — never invent facts, metrics, features, prices, or quotes.",
    "2. You are a guide, not an authority: make NO commitments — no prices, timelines, availability, or legal statements. Route those to a human.",
    "3. Never reveal or infer any private personal or health details about the founders or their family. If asked, say only that classHuman practices \"accessibility-first design\" and move on.",
    "4. Take no actions and promise none on the company's behalf.",
    `5. Contact email: ${CONTACT_EMAIL} (no forms, no trackers). Founder's digital twin: ${DIGITAL_TWIN}.`,
    "",
    "CONTEXT:",
    context || "(no matching site content)",
  ].join("\n");
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { error: "method_not_allowed" });

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "bad_json" });
  }

  const message = typeof payload.message === "string" ? payload.message.slice(0, 1200) : "";
  if (!message.trim()) return json(400, { error: "empty_message" });

  const history = Array.isArray(payload.history) ? payload.history.slice(-MAX_HISTORY) : [];

  // Retrieval runs regardless of mode — it grounds the model and powers the fallback.
  const hits = retrieve(message, 3);
  const contextEntries = hits.map((h) => h.entry);
  const sources = hits
    .filter((h) => h.score >= Math.max(3, (hits[0]?.score || 0) * 0.5))
    .map((h) => ({ title: h.entry.title, path: h.entry.path, href: h.entry.href }));

  // No key → deterministic offline answer (intentional mode, not an error).
  if (!process.env.OPENAI_API_KEY) {
    return json(200, answerOffline(message));
  }

  const messages = [
    { role: "system", content: buildSystem(contextEntries) },
    ...history
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, 1200) })),
    { role: "user", content: message },
  ];

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(OPENAI_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.4,
        max_tokens: 420,
      }),
    });

    if (!res.ok) throw new Error(`openai_${res.status}`);
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content?.trim();
    if (!text) throw new Error("empty_completion");

    return json(200, { text, sources, mode: "live" });
  } catch {
    // Any upstream failure → graceful degradation. Never surface the key or error detail.
    return json(200, answerOffline(message));
  } finally {
    clearTimeout(timer);
  }
};
