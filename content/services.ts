import type { FeaturedService, SectionCopy, ServiceCategory } from "@/types/content";

export const servicesSectionContent: SectionCopy = {
  eyebrow: "Tratamientos",
  title: "Faciales, corporales y masajes en Corregidora, Querétaro.",
  description:
    "Una oferta organizada para que sea fácil entender qué trabaja cada categoría, cuánto cuesta y por dónde puedes empezar.",
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "masajes",
    title: "Masajes",
    intro: "Ideal si buscas liberar tensión, relajarte y favorecer una sensación de mayor ligereza corporal.",
    accent: "Relajación y descarga",
    services: [
      {
        name: "Quiromasaje (descontracturante)",
        price: 700,
        description: "Ideal si buscas aliviar tensión muscular acumulada por estrés o actividad física.",
      },
      {
        name: "Relajante",
        price: 700,
        description: "Ideal si buscas pausar el ritmo del día, relajarte y soltar cargas físicas.",
      },
      {
        name: "Drenaje linfático",
        price: 800,
        description: "Ideal si sientes inflamación o retención de líquidos y buscas favorecer mayor ligereza corporal.",
      },
      {
        name: "Reductivo",
        price: 800,
        description: "Ideal si buscas complementar tu rutina de cuidado corporal en zonas específicas.",
      },
      {
        name: "Reductivo por zona",
        price: 400,
        description: "Ideal si buscas trabajar un área concreta de forma localizada.",
      },
    ],
  },
  {
    id: "faciales",
    title: "Faciales",
    intro: "Ideal si buscas tratamientos personalizados para mejorar la apariencia, textura y luminosidad de tu rostro.",
    accent: "Piel más equilibrada",
    services: [
      {
        name: "Limpieza facial profunda con extracción",
        price: 700,
        description: "Ideal si sientes la piel saturada con impurezas y buscas una limpieza más profunda.",
      },
      {
        name: "Facial personalizado",
        price: 800,
        description: "Ideal si prefieres una recomendación experta ajustada a lo que tu piel necesita hoy.",
      },
      {
        name: "Tratamiento reafirmante",
        price: 800,
        description:
          "Ideal si notas pérdida de elasticidad y buscas apoyar una apariencia de mayor firmeza y vitalidad facial.",
      },
      {
        name: "Tratamiento despigmentante",
        price: 800,
        description: "Ideal si buscas cuidar pieles con tono desigual, manchas o marcas visibles.",
      },
      {
        name: "Tratamiento oxigenante",
        price: 700,
        description: "Ideal si notas tu piel opaca o cansada y buscas favorecer una apariencia más fresca y luminosa.",
      },
      {
        name: "Tratamiento acné",
        price: 800,
        description: "Ideal si tienes brotes activos o marcas y buscas un tratamiento facial con enfoque personalizado.",
      },
      {
        name: "Drenaje linfático facial",
        price: 800,
        description: "Ideal si sientes el rostro hinchado o cansado y buscas favorecer desinflamación y ligereza.",
      },
    ],
  },
  {
    id: "corporales",
    title: "Corporales",
    intro: "Ideal si buscas mejorar la apariencia de la piel, apoyar el contorno corporal y acompañar tu bienestar integral.",
    accent: "Cuidado corporal integral",
    services: [
      {
        name: "Tratamiento reductivo",
        price: 800,
        description: "Ideal si buscas apoyar el contorno corporal de forma progresiva y enfocada.",
      },
      {
        name: "Tratamiento para estrías",
        price: 800,
        description: "Ideal si buscas mejorar la apariencia de estrías y la textura de la piel.",
      },
      {
        name: "Tratamiento para celulitis",
        price: 800,
        description: "Ideal si buscas cuidar zonas con textura irregular y sensación de pesadez.",
      },
      {
        name: "Tratamiento reafirmante",
        price: 800,
        description: "Ideal si buscas apoyar una apariencia de mayor firmeza y tonicidad en zonas específicas.",
      },
      {
        name: "Maderoterapia",
        price: 800,
        description: "Ideal si buscas una técnica corporal sensorial que complemente procesos de tonificación.",
      },
      {
        name: "Vendas calientes/frías",
        price: 600,
        description: "Ideal si buscas una sesión corporal que favorezca descanso y sensación de ligereza.",
      },
    ],
  },
];

export const featuredServicesSectionContent: SectionCopy = {
  eyebrow: "Destacados",
  title: "Seis tratamientos para comenzar con más claridad.",
  description:
    "Si estás comparando opciones, estos servicios reúnen las necesidades más comunes: limpieza, personalización, brotes visibles, drenaje, tonificación y trabajo corporal localizado.",
};

export const featuredServices: FeaturedService[] = [
  {
    category: "Faciales",
    name: "Limpieza facial profunda",
    price: 700,
    description: "Ideal si sientes la piel saturada y buscas una limpieza profunda.",
  },
  {
    category: "Faciales",
    name: "Facial personalizado",
    price: 800,
    description: "Ideal si prefieres una recomendación experta ajustada a lo que tu piel necesita hoy.",
  },
  {
    category: "Faciales",
    name: "Tratamiento acné",
    price: 800,
    description: "Ideal si tienes brotes activos o marcas y buscas un tratamiento facial con enfoque personalizado.",
  },
  {
    category: "Masajes",
    name: "Drenaje linfático",
    price: 800,
    description: "Ideal si sientes inflamación o retención de líquidos y buscas favorecer mayor ligereza corporal.",
  },
  {
    category: "Corporales",
    name: "Maderoterapia",
    price: 800,
    description: "Ideal si buscas una técnica corporal sensorial que complemente procesos de tonificación.",
  },
  {
    category: "Corporales",
    name: "Tratamiento reductivo",
    price: 800,
    description: "Ideal si buscas apoyar el contorno corporal de forma progresiva y enfocada.",
  },
];

export const featuredServicesCtaLabel = "Quiero orientación por WhatsApp";
