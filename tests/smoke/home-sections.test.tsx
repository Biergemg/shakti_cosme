import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { siteConfig, siteLinks } from "@/config/site";
import { faqItems, faqSectionContent } from "@/content/faqs";
import {
  footerContent,
  heroContent,
  navigationItems,
} from "@/content/home";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";

describe("home smoke rendering", () => {
  it("renders the approved hero headline", () => {
    render(<HeroSection content={heroContent} site={siteConfig} whatsappHref={siteLinks.whatsapp} />);
    expect(
      screen.getByRole("heading", {
        name: /tu piel, tu cuerpo y tu descanso merecen algo mejor que un tratamiento genérico/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the main whatsapp cta in header", () => {
    render(
      <Header
        navigationItems={navigationItems}
        instagramHandle={siteConfig.instagramHandle}
        instagramUrl={siteLinks.instagram}
        locationLabel={siteConfig.locationLabel}
        whatsappHref={siteLinks.whatsapp}
      />,
    );

    expect(screen.getAllByRole("link", { name: /agendar por whatsapp/i }).length).toBeGreaterThan(0);
  });

  it("renders faq questions", () => {
    render(<FaqSection section={faqSectionContent} items={faqItems} />);
    expect(screen.getByText(/¿cómo sé qué tratamiento necesito\?/i)).toBeInTheDocument();
  });

  it("renders the footer business information", () => {
    render(<Footer content={footerContent} site={siteConfig} instagramUrl={siteLinks.instagram} whatsappHref={siteLinks.whatsapp} />);
    expect(screen.getByText(siteConfig.address.full)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.phoneDisplay)).toBeInTheDocument();
  });
});
