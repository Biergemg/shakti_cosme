import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type EditorialCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  tone?: "default" | "contrast";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const baseClasses =
  "relative overflow-hidden rounded-[20px] border transition duration-300 ease-out will-change-transform hover:-translate-y-1";

const toneClasses = {
  default:
    "border-[var(--color-border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,238,230,0.94))] shadow-[var(--shadow-premium)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(145deg,rgba(255,255,255,0.42),transparent_42%)] before:content-[''] hover:shadow-[0_34px_90px_rgba(0,0,0,0.12)]",
  contrast:
    "border-white/10 bg-white/6 shadow-[var(--shadow-premium)] backdrop-blur-sm hover:shadow-[0_34px_90px_rgba(0,0,0,0.2)]",
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
    <Component className={cn(baseClasses, toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}
