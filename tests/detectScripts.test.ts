import { describe, it, expect } from "vitest";
import { detectScripts } from "../src";

describe("detectScripts", () => {
  it("detects multiple scripts", () => {
    const result = detectScripts("यह एक वाक्य Hello おはよう");

    expect(result).toHaveLength(3);
    expect(result).toEqual(
      expect.arrayContaining(["Devanagari", "Latin", "Hiragana"])
    );
  });

  it("returns empty array when no scripts are found", () => {
    expect(detectScripts("🔥🚀")).toStrictEqual([]);
  });

  it("returns unique scripts only", () => {
    expect(detectScripts("Hello Hello")).toEqual(["Latin"]);
  });
});
