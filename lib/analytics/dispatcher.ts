import type { AnalyticsEventPayload } from "@/lib/analytics/events";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function dispatchAnalyticsEvent(payload: AnalyticsEventPayload) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({
    event: payload.event,
    category: payload.category,
    label: payload.label,
    location: payload.location,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", payload.event, {
      event_category: payload.category,
      event_label: payload.label,
      location: payload.location,
    });
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", payload.event, {
      category: payload.category,
      label: payload.label,
      location: payload.location,
    });
  }
}
