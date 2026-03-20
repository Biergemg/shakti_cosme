"use client";

import { MessageCircleMore } from "lucide-react";

import { trackWhatsAppClick, type WhatsAppLocation } from "@/lib/analytics";
import { cn } from "@/lib/utils/cn";

const variantClasses = {
  primary:
    "bg-[#3F3A35] text-[#F5F3EF] shadow-[0_24px_56px_rgba(63,58,53,0.26)] hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#544d47] hover:shadow-[0_30px_72px_rgba(63,58,53,0.34)]",
  ghost:
    "border border-current/25 bg-transparent text-current hover:-translate-y-0.5 hover:scale-[1.01] hover:border-current/45 hover:bg-white/8",
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
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.08em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-strong)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]",
        variantClasses[variant],
        className,
      )}
    >
      <MessageCircleMore className="h-4 w-4 stroke-[1.6]" />
      <span>{label}</span>
    </a>
  );
}
