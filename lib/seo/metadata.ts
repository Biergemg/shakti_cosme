import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export function getCanonicalUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildSiteMetadata(): Metadata {
  const socialTitle = "Shakti Cosmetología";
  const socialDescription = "Faciales, corporales y masajes boutique en Corregidora, Querétaro. Atención personalizada con cita previa.";
  const socialImageUrl = getCanonicalUrl(siteConfig.seo.ogImagePath);
  const twitterImageUrl = getCanonicalUrl(siteConfig.seo.twitterImagePath);

  return {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.seo.keywords],
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"],
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: socialImageUrl,
          secureUrl: socialImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.seo.ogImageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [twitterImageUrl],
    },
    verification: {
      google: siteConfig.verification.google,
    },
  };
}

export const siteMetadata = buildSiteMetadata();
