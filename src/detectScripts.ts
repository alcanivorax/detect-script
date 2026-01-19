import { normalize } from "./normalize.js";

export function detectScripts(text: string): Array<string> {
  const normalized = normalize(text);
  if (normalized === "") return [];
  return [];
}
