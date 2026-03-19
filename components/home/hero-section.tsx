import Image from "next/image";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

import type { HeroContent } from "@/types/content";
import type { SiteConfig } from "@/config/site";
import { Shell } from "@/components/ui/shell";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function HeroSection({
  content,
  site,
  whatsappHref,
}: {
  content: HeroContent;
  site: SiteConfig;
  whatsappHref: string;
}) {
  return (
    <section id="inicio" className="relative flex min-h-[96vh] items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src={content.backgroundImage.src}
          alt={content.backgroundImage.alt}
          fill
          priority={content.backgroundImage.priority}
          sizes={content.backgroundImage.sizes}
          className="object-cover motion-ambient-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1816]/90 via-[#1A1816]/65 to-[#1A1816]/35" />
      </div>

      <Shell className="relative z-10">
        <div className="max-w-3xl">
          <div className="relative">
            <div className="motion-reveal-up mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 stroke-[1.7]" />
              {content.badge}
            </div>

            <h1 className="motion-reveal-up motion-delay-100 max-w-[14ch] font-serif-display text-[3.5rem] leading-[0.94] tracking-[-0.02em] text-white sm:text-[4.8rem] lg:text-[6.2rem]">
              {content.title}
            </h1>

            <p className="motion-reveal-up motion-delay-200 mt-8 max-w-xl text-lg leading-8 text-white/90 sm:text-[1.15rem]">
              {content.description}
            </p>

            <div className="motion-reveal-up motion-delay-300 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <WhatsAppButton href={whatsappHref} label={content.primaryCtaLabel} location="hero" />
              <a
                href={content.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-white transition hover:border-white/70 hover:bg-white/10"
              >
                {content.secondaryCtaLabel}
                <ArrowRight className="h-4 w-4 stroke-[1.6]" />
              </a>
            </div>

            <div className="motion-reveal-up motion-delay-300 mt-12 flex flex-col gap-4 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 stroke-[1.6] text-white" />
                <span>{site.locationLabel}</span>
              </div>
              <p>{site.appointmentOnlyLabel}</p>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
