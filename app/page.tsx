import { siteConfig, siteLinks } from "@/config/site";
import { faqItems, faqSectionContent } from "@/content/faqs";
import {
  benefitsContent,
  ctaContent,
  footerContent,
  heroContent,
  introContent,
  navigationItems,
  processContent,
  trustContent,
} from "@/content/home";
import {
  featuredServices,
  featuredServicesCtaLabel,
  featuredServicesSectionContent,
  serviceCategories,
  servicesSectionContent,
} from "@/content/services";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BenefitsSection } from "@/components/home/benefits-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { CtaSection } from "@/components/home/cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedServicesSection } from "@/components/home/featured-services-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { ProcessSection } from "@/components/home/process-section";
import { TrustSection } from "@/components/home/trust-section";
import { FaqStructuredData } from "@/components/seo/faq-structured-data";
import { StructuredData } from "@/components/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <StructuredData categories={serviceCategories} />
      <FaqStructuredData items={faqItems} />

      <Header
        navigationItems={navigationItems}
        instagramHandle={siteConfig.instagramHandle}
        instagramUrl={siteLinks.instagram}
        locationLabel={siteConfig.locationLabel}
        whatsappHref={siteLinks.whatsapp}
      />

      <main>
        <HeroSection content={heroContent} site={siteConfig} whatsappHref={siteLinks.whatsapp} />
        <IntroSection content={introContent} />
        <CategoriesSection section={servicesSectionContent} categories={serviceCategories} />
        <FeaturedServicesSection
          section={featuredServicesSectionContent}
          services={featuredServices}
          ctaLabel={featuredServicesCtaLabel}
          whatsappHref={siteLinks.whatsapp}
        />
        <BenefitsSection content={benefitsContent} />
        <ProcessSection content={processContent} />
        <TrustSection content={trustContent} />
        <CtaSection content={ctaContent} site={siteConfig} instagramUrl={siteLinks.instagram} whatsappHref={siteLinks.whatsapp} />
        <FaqSection section={faqSectionContent} items={faqItems} />
      </main>

      <Footer content={footerContent} site={siteConfig} instagramUrl={siteLinks.instagram} whatsappHref={siteLinks.whatsapp} />
    </>
  );
}
