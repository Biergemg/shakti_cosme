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
          className="editorial-image object-cover object-[72%_center] motion-ambient-pan"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.1) 100%)",
          }}
        />
      </div>

      <Shell className="relative z-10">
        <div className="grid min-h-[70vh] items-center lg:grid-cols-[0.88fr_1.12fr]">
          <div className="max-w-3xl">
            <div className="relative">
              <div className="motion-reveal-up mb-8 inline-flex items-center gap-3 rounded-full border border-white/18 bg-black/22 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/88 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 stroke-[1.7]" />
                {content.badge}
              </div>

              <h1 className="motion-reveal-up motion-delay-100 max-w-[13ch] font-serif-display text-[4rem] leading-[0.9] tracking-[-0.035em] text-white sm:text-[5.2rem] lg:text-[7rem]">
                {content.title}
              </h1>

              <p className="motion-reveal-up motion-delay-200 mt-8 max-w-xl text-lg leading-8 text-white/72 sm:text-[1.16rem] sm:leading-9">
                {content.description}
              </p>

              <div className="motion-reveal-up motion-delay-300 mt-11 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <WhatsAppButton href={whatsappHref} label={content.primaryCtaLabel} location="hero" />
                <a
                  href={content.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/34 bg-transparent px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-white/58 hover:bg-white/10"
                >
                  {content.secondaryCtaLabel}
                  <ArrowRight className="h-4 w-4 stroke-[1.6]" />
                </a>
              </div>

              <div className="motion-reveal-up motion-delay-300 mt-14 flex flex-col gap-4 text-sm text-white/74 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
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
