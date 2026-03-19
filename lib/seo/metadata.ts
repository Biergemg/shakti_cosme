import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export function getCanonicalUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.seo.keywords],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.seo.ogImagePath,
          width: 1200,
          height: 630,
          alt: siteConfig.seo.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [siteConfig.seo.twitterImagePath],
    },
    verification: {
      google: siteConfig.verification.google,
    },
  };
}

export const siteMetadata = buildSiteMetadata();
