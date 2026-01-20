import { normalize } from "./normalize.js";
import { getScriptFromCodePoint } from "./getScriptFromCodePoint.js";

/**
 * Detects the dominant Unicode script used in the given text.
 * Returns a script name (Title Case) or "Unknown".
 */
export function detectPrimaryScript(text: unknown): string {
  const normalized = normalize(text);
  if (normalized === "") return "Unknown";

  const counts: Record<string, number> = {};

  for (const char of normalized) {
    const code = char.codePointAt(0);
    if (code === undefined) continue;

    const script = getScriptFromCodePoint(code);
    if (!script) continue; // ignore punctuation, emoji, symbols, etc.

    counts[script] = (counts[script] ?? 0) + 1;
  }

  const scripts = Object.entries(counts);
  if (scripts.length === 0) return "Unknown";

  // Sort by count descending
  scripts.sort((a, b) => b[1] - a[1]);

  // If top two are tied, it's ambiguous

  if (scripts.length > 1 && scripts[0][1] === scripts[1][1]) {
    return "Unknown";
  }
  return scripts[0][0];
}
