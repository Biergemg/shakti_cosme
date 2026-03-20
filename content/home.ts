import type {
  BenefitsContent,
  CtaContent,
  FooterContent,
  HeroContent,
  IntroContent,
  NavigationItem,
  ProcessContent,
  TrustContent,
} from "@/types/content";

export const navigationItems: NavigationItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
];

export const heroContent: HeroContent = {
  badge: "Cosmetología facial y corporal en Corregidora",
  title: "Tu piel, tu cuerpo y tu descanso merecen algo mejor que un tratamiento genérico.",
  description:
    "Atención personalizada en Corregidora, Querétaro para quienes buscan verse y sentirse mejor con una experiencia clara, cálida y con cita previa.",
  primaryCtaLabel: "Agendar por WhatsApp",
  secondaryCtaLabel: "Ver tratamientos",
  secondaryCtaHref: "#tratamientos",
  backgroundImage: {
    src: "/1.png",
    alt: "",
    priority: true,
    sizes: "100vw",
  },
};

export const introContent: IntroContent = {
  section: {
    eyebrow: "Presentación",
    title: "Un espacio de belleza y bienestar que se siente íntimo, claro y profesional.",
    description:
      "Shakti Cosmetología es un espacio de bienestar estético integral donde faciales, corporales y masajes se viven con una experiencia clara, cuidada y profesional.",
  },
  image: {
    src: "/images/space-editorial.png",
    alt: "",
    width: 800,
    height: 600,
  },
  points: [
    {
      icon: "flower",
      title: "Bienestar estético integral",
      description:
        "Shakti une cosmetología, cuidado corporal y relajación en una experiencia cálida, femenina y pensada para sentirse bien desde el primer contacto.",
    },
    {
      icon: "guidance",
      title: "Orientación sin presión",
      description:
        "Si no sabes qué elegir, el acompañamiento empieza con una conversación clara para ayudarte a tomar una decisión con más seguridad.",
    },
    {
      icon: "catalog",
      title: "Catálogo claro y accesible",
      description:
        "Faciales, corporales y masajes organizados con precios visibles para elegir con contexto, no a ciegas.",
    },
  ],
};

export const benefitsContent: BenefitsContent = {
  section: {
    eyebrow: "Beneficios",
    title: "Resultados visibles con tratamientos enfocados y consistentes.",
    description:
      "Shakti acompaña necesidades reales con tratamientos que ayudan, favorecen y contribuyen al bienestar de forma progresiva y personalizada.",
  },
  image: {
    src: "/images/detail-treatment.png",
    alt: "",
    width: 800,
    height: 600,
  },
  items: [
    "Mejora la apariencia de la piel con tratamientos enfocados.",
    "Favorece la relajación y la descarga física.",
    "Ayuda con la sensación de inflamación y pesadez.",
    "Contribuye a objetivos estéticos de forma progresiva.",
    "Ofrece una experiencia de autocuidado cálida, clara y personalizada.",
  ],
};

export const processContent: ProcessContent = {
  section: {
    eyebrow: "Proceso",
    title: "Una forma simple de entender, elegir y agendar tu tratamiento.",
    description:
      "Shakti está pensada para que incluso quien llega con dudas pueda avanzar con claridad desde WhatsApp hasta su primera sesión.",
  },
  steps: [
    {
      title: "Escribes por WhatsApp",
      description: "Cuéntanos qué te gustaría mejorar o si prefieres orientación para empezar.",
    },
    {
      title: "Recibes guía inicial",
      description: "Te explicamos qué tratamiento se adapta mejor a tu piel, tu cuerpo o tu momento actual.",
    },
    {
      title: "Agendas tu cita",
      description: "Elegimos horario disponible y confirmamos tu atención con cita previa.",
    },
    {
      title: "Vives una atención personalizada",
      description: "Disfrutas una sesión cuidada, clara y enfocada en lo que tu cuerpo y piel necesitan.",
    },
    {
      title: "Continúas solo si quieres",
      description: "Si deseas dar seguimiento, podemos orientarte sobre cómo continuar según tus objetivos.",
    },
  ],
};

export const trustContent: TrustContent = {
  section: {
    eyebrow: "Confianza",
    title: "Un espacio donde puedes decidir con claridad y confianza.",
    description: "Información clara, precios visibles y atención personalizada desde el primer contacto.",
  },
  signals: [
    {
      icon: "catalog",
      label: "Catálogo claro de faciales, corporales y masajes con precios visibles.",
    },
    {
      icon: "shield",
      label: "Atención solo con cita previa para dedicar tiempo y enfoque a cada sesión.",
    },
    {
      icon: "eye",
      label: "Identidad profesional y visual consistente desde el primer contacto.",
    },
    {
      icon: "guidance",
      label: "Enfoque personalizado para orientar incluso si no sabes qué tratamiento elegir.",
    },
  ],
};

export const ctaContent: CtaContent = {
  badge: "CTA final",
  title: "Si no sabes cuál elegir, puedes empezar por preguntar.",
  description:
    "Escríbenos por WhatsApp y te orientamos según lo que te gustaría mejorar, tu piel, tu cuerpo o el tipo de experiencia que buscas.",
  contactTitle: "Contacto directo",
  contactDescription: "Respuesta por WhatsApp para orientación y agenda.",
};

export const footerContent: FooterContent = {
  description:
    "Faciales, corporales y masajes en Corregidora, Querétaro con atención personalizada, agenda por WhatsApp y cita previa.",
  contactHeading: "Contacto",
  hoursHeading: "Horarios",
};
