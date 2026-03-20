import Image from "next/image";

import type { ProcessContent } from "@/types/content";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

export function ProcessSection({ content }: { content: ProcessContent }) {
  return (
    <Section id="proceso" surface="muted">
      <div className="flex flex-col gap-14 lg:gap-20">
        <SectionIntro {...content.section} />
        <div className="grid gap-8 xl:grid-cols-[1.15fr_1fr] xl:items-start">
          <div className="grid gap-6 lg:grid-cols-5 xl:grid-cols-1">
            {content.steps.map((step, index) => (
              <EditorialCard key={step.title} className={index === 1 || index === 3 ? "p-6 lg:translate-y-8 xl:translate-y-0" : "p-6"}>
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-brand-strong)]">Paso {index + 1}</p>
                <h3 className="mt-5 font-serif-display text-[1.95rem] leading-[0.95] tracking-[-0.02em] text-[var(--color-text)]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{step.description}</p>
              </EditorialCard>
            ))}
          </div>
          <div className="editorial-frame relative min-h-[320px] border border-[var(--color-border-soft)]">
            <Image src="/5.png" alt="Detalle editorial del tratamiento" fill sizes="(min-width: 1280px) 36vw, 100vw" className="editorial-image object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,58,53,0.08),rgba(63,58,53,0.46))]" />
          </div>
        </div>
      </div>
    </Section>
  );
}
