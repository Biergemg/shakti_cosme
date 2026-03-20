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
    <Section surface="contrast" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(18,16,15,0.42), rgba(18,16,15,0.78)), url('/3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative flex flex-col gap-14 lg:gap-20">
        <SectionIntro {...section} tone="inverse" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <EditorialCard key={service.name} tone="contrast" className="p-7 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/62">{service.category}</p>
                  <h3 className="mt-4 font-serif-display text-[2.05rem] leading-[0.94] tracking-[-0.02em] text-[var(--color-surface-contrast-foreground)]">{service.name}</h3>
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
