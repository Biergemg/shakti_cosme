import { describe, expect, it } from "vitest";

import { formatPrice } from "@/lib/format/price";

describe("formatPrice", () => {
  it("formats round amounts with peso prefix", () => {
    expect(formatPrice(700)).toBe("$700");
  });

  it("formats larger amounts with locale separators", () => {
    expect(formatPrice(1200)).toBe("$1,200");
  });
});
