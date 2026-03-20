import { buildWhatsAppUrl } from "@/lib/contact/whatsapp";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://shakti-cosme.vercel.app";
const googleVerificationCode =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || "REEMPLAZAR_VERIFICATION_CODE";

export const siteConfig = {
  name: "Shakti Cosmetología",
  shortName: "Shakti",
  locale: "es_MX",
  url: siteUrl,
  locationLabel: "Corregidora, Querétaro",
  phoneDisplay: "+52 442 342 6861",
  phoneHref: "tel:+524423426861",
  whatsappNumber: "+52 442 342 6861",
  instagramHandle: "@shakti_cosme",
  instagramUrl: "https://www.instagram.com/shakti_cosme/",
  appointmentOnlyLabel: "Atención solo con cita previa",
  address: {
    streetAddress: "Villas Campestre 26, Villas Campestre",
    addressLocality: "Corregidora",
    addressRegion: "Querétaro",
    postalCode: "76902",
    addressCountry: "MX",
    full: "Villas Campestre 26, Villas Campestre, Corregidora, Querétaro, C.P. 76902",
  },
  hours: {
    display: ["Lunes a viernes de 11:00 a 20:00", "Sábado de 10:00 a 14:00"],
    schema: ["Mo-Fr 11:00-20:00", "Sa 10:00-14:00"],
  },
  brand: {
    logoSrc: "/brand/logo-shakti.png",
    logoAlt: "Logo Shakti Cosmetología",
  },
  contact: {
    whatsappMessage:
      "Hola, me gustaría recibir orientación sobre los tratamientos de Shakti Cosmetología y agendar una cita.",
  },
  seo: {
    title: "Shakti Cosmetología | Faciales, corporales y masajes en Corregidora, Querétaro",
    description:
      "Shakti Cosmetología ofrece tratamientos faciales, corporales y masajes en Corregidora, Querétaro. Atención personalizada con cita previa y agendado directo por WhatsApp.",
    keywords: [
      "Shakti Cosmetología",
      "cosmetología en Corregidora",
      "faciales en Querétaro",
      "tratamientos corporales en Corregidora",
      "masajes en Corregidora",
      "limpieza facial profunda",
    ],
    ogImagePath: "/opengraph-image.jpg",
    twitterImagePath: "/twitter-image.jpg",
    ogImageAlt: "Shakti Cosmetología en Corregidora, Querétaro",
  },
  verification: {
    google: googleVerificationCode,
  },
} as const;

export const siteLinks = {
  instagram: siteConfig.instagramUrl,
  whatsapp: buildWhatsAppUrl({
    phoneNumber: siteConfig.whatsappNumber,
    message: siteConfig.contact.whatsappMessage,
  }),
} as const;

export type SiteConfig = typeof siteConfig;
