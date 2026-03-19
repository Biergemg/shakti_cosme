import { siteConfig } from "@/config/site";
import type { FAQItem, ServiceCategory } from "@/types/content";

export function buildBeautySalonSchema(categories: ServiceCategory[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.seo.ogImagePath}`,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    description: siteConfig.seo.description,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    openingHours: [...siteConfig.hours.schema],
    sameAs: [siteConfig.instagramUrl],
    areaServed: [siteConfig.address.addressLocality, siteConfig.address.addressRegion],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Servicios de ${siteConfig.name}`,
      itemListElement: categories.map((category) => ({
        "@type": "OfferCatalog",
        name: category.title,
        itemListElement: category.services.map((service) => ({
          "@type": "Offer",
          priceCurrency: "MXN",
          price: service.price.toString(),
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
          },
        })),
      })),
    },
  };
}

export function buildFaqSchema(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
