"use client";

import { MessageCircleMore } from "lucide-react";

import { trackWhatsAppClick, type WhatsAppLocation } from "@/lib/analytics";
import { cn } from "@/lib/utils/cn";

const variantClasses = {
  primary:
    "bg-[var(--color-brand)] text-white shadow-[var(--shadow-brand)] hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)]",
  ghost:
    "border border-[var(--color-text)]/30 bg-white text-[var(--color-text)] hover:border-[var(--color-text)]/60 hover:bg-[var(--color-surface-soft)]",
} as const;

export function WhatsAppButton({
  href,
  label,
  location,
  variant = "primary",
  className,
}: {
  href: string;
  label: string;
  location: WhatsAppLocation;
  variant?: keyof typeof variantClasses;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.08em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-strong)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]",
        variantClasses[variant],
        className,
      )}
    >
      <MessageCircleMore className="h-4 w-4 stroke-[1.6]" />
      <span>{label}</span>
    </a>
  );
}
