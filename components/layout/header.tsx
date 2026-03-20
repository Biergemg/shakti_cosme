import { Instagram, MapPin } from "lucide-react";

import type { NavigationItem } from "@/types/content";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Shell } from "@/components/ui/shell";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Header({
  navigationItems,
  instagramHandle,
  instagramUrl,
  locationLabel,
  whatsappHref,
}: {
  navigationItems: NavigationItem[];
  instagramHandle: string;
  instagramUrl: string;
  locationLabel: string;
  whatsappHref: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-soft)] bg-[var(--color-page)]/72 backdrop-blur-xl">
      <Shell>
        <div className="flex min-h-[80px] items-center justify-between gap-6">
          <a href="#inicio" className="min-w-0 py-2 transition hover:opacity-90">
            <BrandLogo priority className="h-14 w-44 sm:h-16 sm:w-52 md:h-[70px] md:w-56" />
          </a>

          <nav className="hidden items-center gap-8 text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)] lg:flex">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:-translate-y-0.5 hover:text-[var(--color-brand-strong)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:-translate-y-0.5 hover:text-[var(--color-brand-strong)]"
            >
              <Instagram className="h-4 w-4 stroke-[1.6]" />
              {instagramHandle}
            </a>
            <WhatsAppButton href={whatsappHref} label="Agendar por WhatsApp" location="header" className="px-5 py-3" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 py-3 lg:hidden">
          <div className="flex min-w-0 items-center gap-2 text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
            <MapPin className="h-3.5 w-3.5 shrink-0 stroke-[1.6]" />
            <span className="truncate">{locationLabel}</span>
          </div>
          <WhatsAppButton href={whatsappHref} label="WhatsApp" location="header" className="px-4 py-2.5 text-[0.72rem]" />
        </div>
      </Shell>
    </header>
  );
}
