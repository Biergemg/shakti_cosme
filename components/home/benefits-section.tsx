import Image from "next/image";
import { Check } from "lucide-react";

import type { BenefitsContent } from "@/types/content";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

export function BenefitsSection({ content }: { content: BenefitsContent }) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <div>
          <SectionIntro {...content.section} />
          <div className="motion-reveal-up relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--color-border-soft)] shadow-sm sm:mt-12">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105 sm:aspect-video lg:aspect-[4/3]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A2623]/30 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid gap-5">
          {content.items.map((item, index) => (
            <EditorialCard key={item} className={index % 2 === 1 ? "p-6 sm:ml-10 sm:p-7" : "p-6 sm:p-7"}>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full border border-[var(--color-brand-strong)]/18 bg-white/70 p-2">
                  <Check className="h-4 w-4 stroke-[1.6] text-[var(--color-brand-strong)]" />
                </div>
                <p className="text-base leading-8 text-[var(--color-text-muted)]">{item}</p>
              </div>
            </EditorialCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
