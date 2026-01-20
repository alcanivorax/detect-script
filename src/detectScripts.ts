import { getScriptFromCodePoint } from "./getScriptFromCodePoint.js";
import { normalize } from "./normalize.js";

/**
 * Detects all Unicode scripts present in the given text.
 * Returns a deduplicated list of script names.
 */
export function detectScripts(text: unknown): string[] {
  const normalized = normalize(text);
  if (normalized === "") return [];

  const scripts = new Set<string>();

  for (const char of normalized) {
    const code = char.codePointAt(0);
    if (code === undefined) continue;

    const script = getScriptFromCodePoint(code);
    if (!script) continue;

    scripts.add(script);
  }

  return Array.from(scripts) || [];
}
