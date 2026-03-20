import { Instagram, MapPin, Phone } from "lucide-react";

import type { FooterContent } from "@/types/content";
import type { SiteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Shell } from "@/components/ui/shell";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Footer({
  content,
  site,
  instagramUrl,
  whatsappHref,
}: {
  content: FooterContent;
  site: SiteConfig;
  instagramUrl: string;
  whatsappHref: string;
}) {
  return (
    <footer className="border-t border-[var(--color-border-soft)] bg-[var(--color-page)] py-14">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:gap-12">
          <div>
            <BrandLogo className="mb-4 h-14 w-44" imageClassName="object-left" />
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-text-muted)]">{content.description}</p>
          </div>

          <div className="space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-brand-strong)]">{content.contactHeading}</p>
            <a href={site.phoneHref} className="flex items-center gap-2 hover:-translate-y-0.5 hover:text-[var(--color-brand-strong)]">
              <Phone className="h-4 w-4 stroke-[1.6]" />
              {site.phoneDisplay}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:-translate-y-0.5 hover:text-[var(--color-brand-strong)]"
            >
              <Instagram className="h-4 w-4 stroke-[1.6]" />
              {site.instagramHandle}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 stroke-[1.6]" />
              <span>{site.address.full}</span>
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-brand-strong)]">{content.hoursHeading}</p>
            <div className="text-sm leading-7 text-[var(--color-text-muted)]">
              {site.hours.display.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
              <p className="mt-2">{site.appointmentOnlyLabel}</p>
            </div>
            <WhatsAppButton href={whatsappHref} label="Agendar por WhatsApp" location="footer" className="w-full justify-center sm:w-auto" />
          </div>
        </div>
      </Shell>
    </footer>
  );
}
