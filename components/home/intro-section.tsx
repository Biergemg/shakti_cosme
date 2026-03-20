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
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
        <div>
          <SectionIntro {...content.section} />
          <div className="motion-reveal-up editorial-frame relative mt-10 border border-[var(--color-border-soft)] sm:mt-14">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="editorial-image aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105 sm:aspect-video lg:aspect-[4/3]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(48,42,38,0.08),rgba(48,42,38,0.34))]" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {content.points.map((point) => {
            const Icon = introIcons[point.icon];
            return (
              <EditorialCard key={point.title} className="p-7 sm:p-8 lg:p-9">
                <Icon className="h-5 w-5 stroke-[1.6] text-[var(--color-brand-strong)]" />
                <h3 className="mt-6 font-serif-display text-[2.15rem] leading-[0.94] tracking-[-0.02em] text-[var(--color-text)]">{point.title}</h3>
                <p className="mt-4 max-w-md text-base leading-8 text-[var(--color-text-muted)]">{point.description}</p>
              </EditorialCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
