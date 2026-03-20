import type { SectionCopy } from "@/types/content";

import { cn } from "@/lib/utils/cn";

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionCopy & { align?: "left" | "center"; tone?: "default" | "inverse" }) {
  const titleClass = tone === "inverse" ? "text-[var(--color-surface-contrast-foreground)]" : "text-[var(--color-text)]";
  const descriptionClass = tone === "inverse" ? "text-[var(--color-contrast-muted)]" : "text-[var(--color-text-muted)]";
  const eyebrowClass = tone === "inverse" ? "text-white/70" : "text-[var(--color-brand-strong)]";

  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <p className={cn("mb-5 text-[0.7rem] uppercase tracking-[0.3em]", eyebrowClass)}>{eyebrow}</p>
      <h2 className={cn("font-serif-display text-[2.9rem] leading-[0.96] tracking-[-0.025em] sm:text-[3.6rem] lg:text-[4.5rem]", titleClass)}>{title}</h2>
      <p className={cn("mt-7 max-w-2xl text-[1.02rem] leading-8 sm:text-[1.1rem] sm:leading-9", descriptionClass)}>{description}</p>
    </div>
  );
}
