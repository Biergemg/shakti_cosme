import { dispatchAnalyticsEvent } from "@/lib/analytics/dispatcher";
import { analyticsEvents, type AnalyticsEventPayload, type WhatsAppLocation } from "@/lib/analytics/events";

export type { AnalyticsEventPayload, WhatsAppLocation };

export function trackEvent(payload: AnalyticsEventPayload) {
  dispatchAnalyticsEvent(payload);
}

export function trackWhatsAppClick(location: WhatsAppLocation) {
  trackEvent(analyticsEvents.whatsappClick(location));
}
