export function getScriptFromCodePoint(code: number): string | null {
  // --- Latin ---
  if (
    (code >= 0x0041 && code <= 0x007a) || // Basic Latin
    (code >= 0x00c0 && code <= 0x024f) // Latin-1 Supplement + Extended
  ) {
    return "Latin";
  }

  // --- Devanagari ---
  if (code >= 0x0900 && code <= 0x097f) {
    return "Devanagari";
  }

  // --- Cyrillic ---
  if (code >= 0x0400 && code <= 0x04ff) {
    return "Cyrillic";
  }

  // --- Han ---
  if (code >= 0x4e00 && code <= 0x9fff) {
    return "Han";
  }

  // --- Hiragana ---
  if (code >= 0x3040 && code <= 0x309f) {
    return "Hiragana";
  }

  // --- Katakana ---
  if (code >= 0x30a0 && code <= 0x30ff) {
    return "Katakana";
  }

  // --- Hangul ---
  if (code >= 0xac00 && code <= 0xd7af) {
    return "Hangul";
  }

  return null;
}
