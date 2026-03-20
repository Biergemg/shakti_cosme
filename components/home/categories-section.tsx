import Image from "next/image";

import type { SectionCopy, ServiceCategory } from "@/types/content";
import { formatPrice } from "@/lib/format/price";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

const categoryImages: Partial<Record<ServiceCategory["id"], { src: string; alt: string }>> = {
  masajes: { src: "/images/detail-treatment.png", alt: "Detalle sensorial de masaje" },
  faciales: { src: "/3.png", alt: "Tratamiento facial editorial" },
  corporales: { src: "/4.png", alt: "Tratamiento corporal editorial" },
};

export function CategoriesSection({
  section,
  categories,
}: {
  section: SectionCopy;
  categories: ServiceCategory[];
}) {
  return (
    <Section id="tratamientos">
      <div className="flex flex-col gap-14 lg:gap-20">
        <SectionIntro {...section} />
        <div className="grid items-start gap-7 lg:grid-cols-3">
          {categories.map((category) => {
            const image = categoryImages[category.id];

            return (
              <EditorialCard key={category.id} className="flex h-full flex-col p-0">
                <div className="relative h-60 overflow-hidden rounded-t-[20px] bg-[linear-gradient(180deg,#f2ede6,#e8dfd3)]">
                  {image ? (
                    <>
                      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="editorial-image object-cover" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,58,53,0.08),rgba(63,58,53,0.38))]" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.35),rgba(232,223,211,0.72))]" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-brand-strong)]">{category.accent}</p>
                  <h3 className="mt-5 font-serif-display text-[2.35rem] leading-[0.92] tracking-[-0.02em] text-[var(--color-text)]">{category.title}</h3>
                  <p className="mt-4 min-h-24 text-base leading-8 text-[var(--color-text-muted)]">{category.intro}</p>
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
                </div>
              </EditorialCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
