import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";
import { Shell } from "@/components/ui/shell";

const surfaceClasses = {
  default: "surface-light",
  muted: "surface-muted",
  contrast: "surface-contrast text-[var(--color-surface-contrast-foreground)]",
} as const;

export function Section({
  children,
  id,
  surface = "default",
  className,
  shellClassName,
}: {
  children: ReactNode;
  id?: string;
  surface?: keyof typeof surfaceClasses;
  className?: string;
  shellClassName?: string;
}) {
  return (
    <section id={id} className={cn("section-space section-halo", surfaceClasses[surface], className)}>
      <Shell className={shellClassName}>{children}</Shell>
    </section>
  );
}
