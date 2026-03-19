export type AnchorHref = `#${string}`;

export type NavigationItem = {
  label: string;
  href: AnchorHref;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

export type HeroContent = {
  badge: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: AnchorHref;
  backgroundImage: ImageAsset;
};

export type IntroFeature = {
  title: string;
  description: string;
  icon: "flower" | "guidance" | "catalog";
};

export type IntroContent = {
  section: SectionCopy;
  image: ImageAsset;
  points: IntroFeature[];
};

export type ServiceItem = {
  name: string;
  price: number;
  description: string;
};

export type ServiceCategory = {
  id: "faciales" | "corporales" | "masajes";
  title: string;
  intro: string;
  accent: string;
  services: ServiceItem[];
};

export type FeaturedService = {
  category: string;
  name: string;
  price: number;
  description: string;
};

export type BenefitsContent = {
  section: SectionCopy;
  image: ImageAsset;
  items: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessContent = {
  section: SectionCopy;
  steps: ProcessStep[];
};

export type TrustSignal = {
  label: string;
  icon: "catalog" | "shield" | "eye" | "guidance";
};

export type TrustContent = {
  section: SectionCopy;
  signals: TrustSignal[];
};

export type CtaContent = {
  badge: string;
  title: string;
  description: string;
  contactTitle: string;
  contactDescription: string;
};

export type FooterContent = {
  description: string;
  contactHeading: string;
  hoursHeading: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
