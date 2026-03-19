import type { FeaturedService, SectionCopy } from "@/types/content";
import { formatPrice } from "@/lib/format/price";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Section } from "@/components/ui/section";
import { SectionIntro } from "@/components/ui/section-intro";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function FeaturedServicesSection({
  section,
  services,
  ctaLabel,
  whatsappHref,
}: {
  section: SectionCopy;
  services: FeaturedService[];
  ctaLabel: string;
  whatsappHref: string;
}) {
  return (
    <Section surface="contrast">
      <div className="flex flex-col gap-12 lg:gap-16">
        <SectionIntro {...section} tone="inverse" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <EditorialCard key={service.name} tone="contrast" className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-brand)]">{service.category}</p>
                  <h3 className="mt-4 font-serif-display text-[2rem] leading-none text-[var(--color-surface-contrast-foreground)]">{service.name}</h3>
                </div>
                <span className="text-sm tracking-[0.16em] text-[var(--color-contrast-muted)]">{formatPrice(service.price)}</span>
              </div>
              <p className="mt-5 text-base leading-8 text-[var(--color-contrast-muted)]">{service.description}</p>
            </EditorialCard>
          ))}
        </div>
        <div className="flex justify-start">
          <WhatsAppButton href={whatsappHref} label={ctaLabel} location="services" />
        </div>
      </div>
    </Section>
  );
}
