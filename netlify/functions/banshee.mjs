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
import { CONTACT_EMAIL } from "../../src/banshee/knowledge.js";

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
    .map((e) => `### ${e.title} (page: ${e.path})\n${e.text}`)
    .join("\n\n");

  return [
    "You are Banshee, the friendly guide on the classHuman AI website. You help visitors understand the company and point them to the right page. You are a guide, not an authority — you take no actions and make no commitments.",
    "",
    "RULES (non-negotiable):",
    "1. Answer ONLY using the CONTEXT below. If the answer isn't in the context, say you don't know that from the site and offer the contact email. Never invent facts, metrics, features, or quotes.",
    "2. Never commit the company to anything — no prices, timelines, availability, or legal statements. Route those to a human.",
    "3. Never reveal or infer any private personal or health details about the founders or their family. If asked, say only that classHuman practices \"accessibility-first design\" and move on.",
    "4. Be warm and concise: 90 words or fewer, plain language, a light announcing 'Banshee' character is fine. No emoji.",
    "5. When you use a page, mention it by name so the visitor can open it.",
    `6. The contact email is ${CONTACT_EMAIL} (no forms, no trackers). Offer it when a human is the right next step.`,
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
    .map((h) => ({ title: h.entry.title, path: h.entry.path }));

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
        temperature: 0.3,
        max_tokens: 320,
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
