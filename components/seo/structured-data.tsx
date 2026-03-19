import { buildBeautySalonSchema } from "@/lib/seo/schema";
import type { ServiceCategory } from "@/types/content";
import { JsonLd } from "@/components/seo/json-ld";

export function StructuredData({ categories }: { categories: ServiceCategory[] }) {
  return <JsonLd data={buildBeautySalonSchema(categories)} />;
}
