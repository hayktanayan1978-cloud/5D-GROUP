export interface Product {
  slug: string;
  name: string;
  category: string;
  brand: string;
  shortDesc: {
    en: string;
    ru: string;
  };
  fullDesc: {
    en: string;
    ru: string;
  };
  features: {
    en: string[];
    ru: string[];
  };
}

export const products: Product[] = [
  {
    slug: "vity-d3-5000",
    name: "VITY Vitamin D3 5000 IU",
    category: "Vitamins",
    brand: "VITY",
    shortDesc: {
      en: "High-potency Vitamin D3 for bone, muscle, and immune support.",
      ru: "Высокоэффективный витамин D3 для поддержки костей, мышц и иммунитета."
    },
    fullDesc: {
      en: "Essential daily D3 supplementation formulated to professional standards for optimal bioavailability.",
      ru: "Ежедневный прием витамина D3, разработанный по профессиональным стандартам для оптимальной усвояемости."
    },
    features: {
      en: ["5000 IU per serving", "Immune system support", "Bone health & density"],
      ru: ["5000 МЕ в порции", "Поддержка иммунной системы", "Здоровье и прочность костей"]
    }
  },
  {
    slug: "vity-selen-100",
    name: "VITY Selen 100 mcg",
    category: "Minerals",
    brand: "VITY",
    shortDesc: {
      en: "Essential trace mineral for thyroid health and antioxidant protection.",
      ru: "Необходимый микроэлемент для здоровья щитовидной железы и антиоксидантной защиты."
    },
    fullDesc: {
      en: "Premium selenium formula supporting cellular defense and metabolic regulation across adult populations.",
      ru: "Формула селена премиум-класса для клеточной защиты и регуляции обмена веществ."
    },
    features: {
      en: ["100 mcg elemental selenium", "Antioxidant protection", "Thyroid function support"],
      ru: ["100 мкг элементарного селена", "Антиоксидантная защита", "Поддержка функции щитовидной железы"]
    }
  }
];

export function localizeProduct(product: Product, lang: "en" | "ru") {
  return {
    ...product,
    shortDesc: product.shortDesc[lang] || product.shortDesc.en,
    fullDesc: product.fullDesc[lang] || product.fullDesc.en,
    features: product.features[lang] || product.features.en
  };
}
