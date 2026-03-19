import { describe, expect, it } from "vitest";

import { buildWhatsAppUrl, normalizePhoneNumber } from "@/lib/contact/whatsapp";

describe("whatsapp helpers", () => {
  it("normalizes phone numbers to digits only", () => {
    expect(normalizePhoneNumber("+52 442 342 6861")).toBe("524423426861");
  });

  it("builds whatsapp url with encoded message", () => {
    expect(
      buildWhatsAppUrl({
        phoneNumber: "+52 442 342 6861",
        message: "Hola Shakti",
      }),
    ).toBe("https://wa.me/524423426861?text=Hola%20Shakti");
  });
});
