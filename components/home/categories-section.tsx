import type { SectionCopy, ServiceCategory } from "@/types/content";
import { formatPrice } from "@/lib/format/price";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

export function CategoriesSection({
  section,
  categories,
}: {
  section: SectionCopy;
  categories: ServiceCategory[];
}) {
  return (
    <Section id="tratamientos">
      <div className="flex flex-col gap-12 lg:gap-16">
        <SectionIntro {...section} />
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <EditorialCard key={category.id} className={index === 1 ? "p-7 sm:p-8 lg:-translate-y-6" : "p-7 sm:p-8"}>
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-brand-strong)]">{category.accent}</p>
              <h3 className="mt-5 font-serif-display text-[2.2rem] leading-none text-[var(--color-text)]">{category.title}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">{category.intro}</p>
              <ul className="mt-8 space-y-4 border-t border-[var(--color-border-soft)] pt-7">
                {category.services.map((service) => (
                  <li key={service.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[1rem] leading-7 text-[var(--color-text)]">{service.name}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-text-subtle)]">{service.description}</p>
                    </div>
                    <span className="shrink-0 text-sm tracking-[0.12em] text-[var(--color-brand-strong)]">{formatPrice(service.price)}</span>
                  </li>
                ))}
              </ul>
            </EditorialCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
