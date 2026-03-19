import { ArrowUpRight, MessageCircleHeart } from "lucide-react";

import type { CtaContent } from "@/types/content";
import type { SiteConfig } from "@/config/site";
import { Section } from "@/components/ui/section";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function CtaSection({
  content,
  site,
  instagramUrl,
  whatsappHref,
}: {
  content: CtaContent;
  site: SiteConfig;
  instagramUrl: string;
  whatsappHref: string;
}) {
  return (
    <Section>
      <div className="panel-soft rounded-[2rem] border border-[var(--color-border-soft)] bg-[linear-gradient(135deg,rgba(233,222,210,0.92),rgba(255,255,255,0.72))] p-8 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-brand-strong)]/12 bg-white/60 px-4 py-2 text-[0.72rem] uppercase tracking-[0.26em] text-[var(--color-brand-strong)]">
              <MessageCircleHeart className="h-4 w-4 stroke-[1.6]" />
              {content.badge}
            </div>
            <h2 className="mt-8 max-w-[12ch] font-serif-display text-4xl leading-[0.98] text-[var(--color-text)] sm:text-5xl lg:text-[4.2rem]">
              {content.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">{content.description}</p>
          </div>

          <div className="space-y-5 rounded-[1.5rem] border border-[var(--color-brand-strong)]/12 bg-white/68 p-6 sm:p-8">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-brand-strong)]">{content.contactTitle}</p>
              <p className="mt-3 text-lg leading-8 text-[var(--color-text)]">{content.contactDescription}</p>
            </div>

            <div className="space-y-2 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>{site.phoneDisplay}</p>
              {site.hours.display.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
              <p>{site.appointmentOnlyLabel}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <WhatsAppButton href={whatsappHref} label="Agendar por WhatsApp" location="final-cta" />
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-[0.08em] text-[var(--color-text)] transition hover:text-[var(--color-brand-strong)]"
              >
                Ver Instagram
                <ArrowUpRight className="h-4 w-4 stroke-[1.6]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
