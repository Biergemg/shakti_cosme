import Image from "next/image";
import { Check } from "lucide-react";

import type { BenefitsContent } from "@/types/content";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

export function BenefitsSection({ content }: { content: BenefitsContent }) {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
        <div>
          <SectionIntro {...content.section} />
          <div className="motion-reveal-up editorial-frame relative mt-10 border border-[var(--color-border-soft)] sm:mt-14">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="editorial-image aspect-[5/6] w-full object-cover object-center transition duration-700 hover:scale-[1.02] sm:aspect-[16/10] lg:aspect-[5/6]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(48,42,38,0.04),rgba(48,42,38,0.34))]" />
          </div>
        </div>

        <div className="grid gap-5 lg:pl-4">
          {content.items.map((item) => (
            <EditorialCard key={item} className="p-6 sm:p-7 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full border border-[var(--color-brand-strong)]/18 bg-white/82 p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                  <Check className="h-4 w-4 stroke-[1.8] text-[var(--color-brand-strong)]" />
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
