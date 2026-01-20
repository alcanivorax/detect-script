import { describe, it, expect } from "vitest";
import { detectPrimaryScript } from "../src/index";

describe("detectLanguage", () => {
  it("detects scripts", () => {
    expect(detectPrimaryScript("यह एक वाक्य")).toBe("Devanagari");
    expect(detectPrimaryScript("Hello")).toBe("Latin");
  });

  it("unknown cases", () => {
    expect(detectPrimaryScript("🔥🚀")).toBe("Unknown");
    expect(detectPrimaryScript("")).toBe("Unknown");
  });
});
