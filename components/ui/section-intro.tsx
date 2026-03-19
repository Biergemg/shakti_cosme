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
  const eyebrowClass = tone === "inverse" ? "text-[var(--color-brand)]" : "text-[var(--color-brand-strong)]";

  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <p className={cn("mb-4 text-[0.72rem] uppercase tracking-[0.32em]", eyebrowClass)}>{eyebrow}</p>
      <h2 className={cn("font-serif-display text-4xl leading-[1.02] sm:text-5xl lg:text-[3.6rem]", titleClass)}>{title}</h2>
      <p className={cn("mt-6 max-w-2xl text-base leading-8 sm:text-lg", descriptionClass)}>{description}</p>
    </div>
  );
}
