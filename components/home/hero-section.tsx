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
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src={content.backgroundImage.src}
          alt={content.backgroundImage.alt}
          fill
          priority={content.backgroundImage.priority}
          sizes={content.backgroundImage.sizes}
          className="editorial-image object-cover object-[76%_center] motion-ambient-pan"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.4) 38%, rgba(0,0,0,0.14) 100%)",
          }}
        />
      </div>

      <Shell className="relative z-10">
        <div className="grid min-h-[70vh] items-center lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[41rem]">
            <div className="relative">
              <div className="motion-reveal-up mb-8 inline-flex items-center gap-3 rounded-full border border-white/18 bg-black/28 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/92 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 stroke-[1.7]" />
                {content.badge}
              </div>

              <h1 className="motion-reveal-up motion-delay-100 max-w-[11ch] font-serif-display text-[3.55rem] leading-[0.92] tracking-[-0.03em] text-white sm:text-[4.6rem] lg:text-[6rem]">
                {content.title}
              </h1>

              <p className="motion-reveal-up motion-delay-200 mt-8 max-w-xl text-lg leading-8 text-white/84 sm:text-[1.12rem] sm:leading-9">
                {content.description}
              </p>

              <div className="motion-reveal-up motion-delay-300 mt-11 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <WhatsAppButton
                  href={whatsappHref}
                  label={content.primaryCtaLabel}
                  location="hero"
                  className="min-w-[240px] shadow-[0_22px_48px_rgba(0,0,0,0.24)]"
                />
                <a
                  href={content.secondaryCtaHref}
                  className="inline-flex min-h-[56px] min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-semibold leading-none tracking-[0.02em] text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/16"
                >
                  <span>{content.secondaryCtaLabel}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 stroke-[1.8]" />
                </a>
              </div>

              <div className="motion-reveal-up motion-delay-300 mt-14 flex flex-col gap-4 text-sm text-white/82 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 stroke-[1.6] text-white" />
                  <span>{site.locationLabel}</span>
                </div>
                <p>{site.appointmentOnlyLabel}</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </Shell>
    </section>
  );
}
