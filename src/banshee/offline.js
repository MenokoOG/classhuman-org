/* Banshee offline engine + retrieval — pure, dependency-free, isomorphic.
   Used two ways:
     1. Server (Netlify function): retrieve context slices for the model, and
        answer deterministically when there's no key / a timeout / an error.
     2. Browser: client-side fallback when the function itself is unreachable
        (e.g. `vite` dev with no functions, or a network failure).
   No DOM, no Node APIs — safe in both runtimes. */

import { KNOWLEDGE, CONTACT_EMAIL, QUICK_FACTS, DIGITAL_TWIN } from "./knowledge.js";

const STOP = new Set([
  "the", "a", "an", "and", "or", "but", "of", "to", "in", "on", "for", "is",
  "are", "do", "does", "did", "how", "what", "why", "who", "can", "i", "you",
  "your", "me", "my", "we", "it", "this", "that", "with", "about", "tell",
  "please", "help", "know", "want", "need", "give", "show", "so", "at", "be",
]);

function tokenize(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    // drop stopwords and tiny tokens ("s", "ai" is kept via length>=2? no —
    // require length >= 3 so single/double-char noise can't cause false matches)
    .filter((t) => t && t.length >= 3 && !STOP.has(t));
}

/* Score one knowledge entry against the query tokens. Keyword hits weigh most;
   whole-word title/text hits add a little. Whole-token matching (not substring)
   avoids "s" matching everything. Returns a number ≥ 0. */
function scoreEntry(entry, tokens) {
  if (!tokens.length) return 0;
  const kw = new Set(entry.keywords);
  const hay = new Set(tokenize(entry.title + " " + entry.text));
  let score = 0;
  for (const t of tokens) {
    if (kw.has(t)) score += 3;
    else if (hay.has(t)) score += 1;
  }
  return score;
}

// A query is "confidently" answered only if the best entry has a real hit
// (at least one keyword match, or several text-token matches).
const CONFIDENT = 3;

/* Rank knowledge entries for a query. Returns [{entry, score}] desc. */
export function retrieve(query, k = 3) {
  const tokens = tokenize(query);
  return KNOWLEDGE.map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

function isGreeting(q) {
  return /^(\s*)(hi|hey|hello|yo|howdy|good (morning|afternoon|evening))\b/i.test(q || "");
}
function isThanks(q) {
  return /\b(thanks|thank you|thx|appreciate)\b/i.test(q || "");
}
function isContactIntent(q) {
  return /\b(contact|email|reach|hire|quote|engage|pricing|price|cost|timeline|get in touch|talk to)\b/i.test(q || "");
}
function isTwinIntent(q) {
  return /\b(digital twin|twin|talk to lawrence|lawrence'?s twin|talk to the founder)\b/i.test(q || "");
}

export const SUGGESTIONS = [
  "What does classHuman AI do?",
  "What is TACO Loop?",
  "Show me a working demo",
  "How do I get in touch?",
];

/* Deterministic answer with cited sources. Always returns:
   { text, sources: [{title, path}], mode: "offline", handoff?: bool } */
export function answerOffline(query) {
  const q = (query || "").trim();

  if (!q) {
    return {
      text: `I'm Banshee, the guide for classHuman AI. ${QUICK_FACTS.positioning} Ask me about our products (${QUICK_FACTS.products}), the demos, or how to get in touch.`,
      sources: [],
      mode: "offline",
    };
  }

  if (isGreeting(q) && tokenize(q).length <= 2) {
    return {
      text: `Hey — I'm Banshee. I can point you to the right place on classHuman AI: our products (${QUICK_FACTS.products}), the demos, our story, or contact. What are you after?`,
      sources: [],
      mode: "offline",
    };
  }

  if (isThanks(q) && tokenize(q).length <= 3) {
    return { text: "Anytime. Anything else you'd like to know about classHuman AI?", sources: [], mode: "offline" };
  }

  // Personal-conversation intent → point to the founder's digital twin.
  if (isTwinIntent(q)) {
    const twin = KNOWLEDGE.find((e) => e.id === "twin");
    return {
      text: `${twin.text}`,
      sources: [{ title: twin.title, path: twin.path, href: twin.href || DIGITAL_TWIN }],
      mode: "offline",
    };
  }

  const hits = retrieve(q, 3);
  const confident = hits.length > 0 && hits[0].score >= CONFIDENT;

  // Contact intent, or nothing confidently matched: hand off to a human with the
  // email. Never invent an answer — route the unknown to a person (TACO discipline).
  if (isContactIntent(q) || !confident) {
    const contact = KNOWLEDGE.find((e) => e.id === "contact");
    const lead = isContactIntent(q)
      ? "Happy to point you to a human for that."
      : "I keep to what's on the classHuman AI site, and I don't have that here — but a human can help.";
    return {
      text: `${lead} Email ${CONTACT_EMAIL} — no forms, no trackers. For quotes, timelines, or anything needing a commitment, a person handles it directly.`,
      sources: [{ title: contact.title, path: contact.path }],
      mode: "offline",
      handoff: true,
    };
  }

  const top = hits[0].entry;
  const sources = hits
    .filter((h) => h.score >= Math.max(CONFIDENT, hits[0].score * 0.5))
    .map((h) => ({ title: h.entry.title, path: h.entry.path, href: h.entry.href }));

  return { text: top.text, sources, mode: "offline" };
}
