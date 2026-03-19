import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type EditorialCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  tone?: "default" | "contrast";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const toneClasses = {
  default:
    "relative overflow-hidden rounded-[1.6rem] border border-[var(--color-border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,238,230,0.92))] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(145deg,rgba(255,255,255,0.38),transparent_42%)] before:content-['']",
  contrast: "rounded-[1.6rem] border border-white/10 bg-white/5",
} as const;

export function EditorialCard<T extends ElementType = "article">({
  as,
  children,
  className,
  tone = "default",
  ...props
}: EditorialCardProps<T>) {
  const Component = (as || "article") as ElementType;

  return (
    <Component className={cn(toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}
