import Image from "next/image";
import { Flower2, HeartHandshake, Layers3 } from "lucide-react";

import type { IntroContent } from "@/types/content";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

const introIcons = {
  flower: Flower2,
  guidance: HeartHandshake,
  catalog: Layers3,
} as const;

export function IntroSection({ content }: { content: IntroContent }) {
  return (
    <Section surface="muted">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionIntro {...content.section} />
          <div className="motion-reveal-up editorial-frame relative border border-[var(--color-border-soft)]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="editorial-image aspect-[16/11] w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(48,42,38,0.05),rgba(48,42,38,0.28))]" />
          </div>
        </div>

        <div className="grid gap-6">
          {content.points.map((point) => {
            const Icon = introIcons[point.icon];
            return (
              <EditorialCard key={point.title} className="p-7 sm:p-8 lg:p-9">
                <Icon className="h-5 w-5 stroke-[1.6] text-[var(--color-brand-strong)]" />
                <h3 className="mt-6 font-serif-display text-[2.05rem] leading-[0.96] tracking-[-0.02em] text-[var(--color-text)]">{point.title}</h3>
                <p className="mt-4 max-w-md text-base leading-8 text-[var(--color-text-muted)]">{point.description}</p>
              </EditorialCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
