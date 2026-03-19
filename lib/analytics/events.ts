export const whatsappLocations = ["header", "hero", "services", "final-cta", "footer"] as const;

export type WhatsAppLocation = (typeof whatsappLocations)[number];

export const analyticsEventNames = {
  whatsappClick: "whatsapp_click",
} as const;

export type AnalyticsEventName = (typeof analyticsEventNames)[keyof typeof analyticsEventNames];

export type AnalyticsEventPayload = {
  event: AnalyticsEventName;
  category?: string;
  label?: string;
  location?: string;
};

export const analyticsEvents = {
  whatsappClick(location: WhatsAppLocation): AnalyticsEventPayload {
    return {
      event: analyticsEventNames.whatsappClick,
      category: "conversion",
      label: "agendar_whatsapp",
      location,
    };
  },
};
