import type { FAQItem, SectionCopy } from "@/types/content";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

export function FaqSection({
  section,
  items,
}: {
  section: SectionCopy;
  items: FAQItem[];
}) {
  return (
    <Section id="faq" surface="muted">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionIntro {...section} />
        <div className="space-y-4">
          {items.map((faq) => (
            <EditorialCard key={faq.question} as="details" className="group rounded-[1.35rem] p-6 open:bg-white/90">
              <summary className="cursor-pointer list-none pr-8 text-lg leading-8 text-[var(--color-text)] marker:hidden">{faq.question}</summary>
              <p className="mt-4 border-t border-[var(--color-border-soft)] pt-4 text-sm leading-7 text-[var(--color-text-muted)]">{faq.answer}</p>
            </EditorialCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
