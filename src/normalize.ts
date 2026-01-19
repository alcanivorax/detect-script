export function normalize(text: unknown): string {
  if (typeof text !== "string") return "";

  const trimmedText = text.trim();

  return trimmedText;
}
