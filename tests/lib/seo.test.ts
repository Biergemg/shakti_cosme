import { describe, expect, it } from "vitest";

import { siteConfig } from "@/config/site";
import { faqItems } from "@/content/faqs";
import { serviceCategories } from "@/content/services";
import { buildSiteMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { buildBeautySalonSchema, buildFaqSchema } from "@/lib/seo/schema";

describe("seo helpers", () => {
  it("builds metadata with the configured title and description", () => {
    const metadata = buildSiteMetadata();
    expect(metadata.title).toBe(siteConfig.seo.title);
    expect(metadata.description).toBe(siteConfig.seo.description);
  });

  it("builds a canonical url from the site url", () => {
    expect(getCanonicalUrl("/sitemap.xml")).toBe(`${siteConfig.url}/sitemap.xml`);
  });

  it("builds a BeautySalon schema with core business fields", () => {
    const schema = buildBeautySalonSchema(serviceCategories);
    expect(schema["@type"]).toBe("BeautySalon");
    expect(schema.name).toBe(siteConfig.name);
    expect(schema.telephone).toBe(siteConfig.phoneDisplay);
    expect(schema.openingHours).toEqual(siteConfig.hours.schema);
    expect(schema.sameAs).toEqual([siteConfig.instagramUrl]);
  });

  it("builds a FAQ schema with all faq items", () => {
    const schema = buildFaqSchema(faqItems);
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(faqItems.length);
  });
});
