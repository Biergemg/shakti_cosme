import { Eye, ListChecks, MessageSquareMore, ShieldCheck } from "lucide-react";

import type { TrustContent } from "@/types/content";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";

const trustIcons = {
  catalog: ListChecks,
  shield: ShieldCheck,
  eye: Eye,
  guidance: MessageSquareMore,
} as const;

export function TrustSection({ content }: { content: TrustContent }) {
  return (
    <Section surface="contrast">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionIntro {...content.section} tone="inverse" />
        <div className="grid gap-5 sm:grid-cols-2">
          {content.signals.map((signal) => {
            const Icon = trustIcons[signal.icon];
            return (
              <EditorialCard key={signal.label} tone="contrast" className="p-6">
                <Icon className="h-5 w-5 stroke-[1.6] text-[var(--color-brand)]" />
                <p className="mt-5 text-base leading-8 text-[var(--color-contrast-muted)]">{signal.label}</p>
              </EditorialCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
