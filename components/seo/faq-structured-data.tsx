import { buildFaqSchema } from "@/lib/seo/schema";
import type { FAQItem } from "@/types/content";
import { JsonLd } from "@/components/seo/json-ld";

export function FaqStructuredData({ items }: { items: FAQItem[] }) {
  return <JsonLd data={buildFaqSchema(items)} />;
}
