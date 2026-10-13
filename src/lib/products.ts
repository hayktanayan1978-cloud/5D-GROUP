import cVity1000Transparent from "@/assets/vity-c-1000-transparent.png";
import selenTransparent from "@/assets/vity-selen-100-transparent.png";

export type Lang = "en" | "ru";

export type Product = {
  slug: string;
  name: string;
  category: string;
  type: string;
  formulation?: string;
  ingredients: string[];
  format?: string;
  purpose?: string;
  code?: string;
  accent: "blue" | "teal" | "amber" | "coral";
  image?: string;
};

export const products: Product[] = [
  {
    slug: "d-vity-5000-chewable",
    name: "VITAMIN D3 5000 IU Chewable tablets",
    category: "ВИТАМИН D3",
    type: "Vitamin D3",
    formulation: "D-VITY 5000 5000 МЕ / 125 мкг",
    ingredients: ["Vitamin D3"],
    format: "Chewable · Natural raspberry flavor",
    code: "D-5000-CHW",
    accent: "blue",
    image: "/vity-d3-5000-chewable.png"
  },
  {
    slug: "d-vity-5000-tablets",
    name: "VITAMIN D3 5000 IU tablets",
    category: "ВИТАМИН D3",
    type: "Vitamin D3",
    formulation: "D-VITY 5000 5000 МЕ / 125 мкг",
    ingredients: ["Vitamin D3"],
    format: "Tablet",
    code: "D-5000-TAB",
    accent: "blue",
    image: "/vity-d3-5000-tablets.png"
  },
  {
    slug: "d-vity-2000",
    name: "VITAMIN D3 2000 IU tablets",
    category: "ВИТАМИН D3",
    type: "Vitamin D3",
    formulation: "D-VITY 2000 2000 МЕ / 50 мкг",
    ingredients: ["Vitamin D3"],
    format: "Tablet",
    code: "D-2000-TAB",
    accent: "blue",
    image: "/vity-d3-2000.png"
  },
  {
    slug: "d-vity-400-kids",
    name: "VITAMIN D3 400 IU Chewable tablets for Kids",
    category: "ВИТАМИН D3",
    type: "Vitamin D3",
    formulation: "D-VITY 400 Kids 400 МЕ / 10 мкг",
    ingredients: ["Vitamin D3"],
    purpose: "For children from 3 years",
    code: "D-400-KIDS",
    accent: "coral",
    image: "/vity-d3-400-kids.png"
  },
  {
    slug: "multi-vity-man",
    name: "Multivitamins for men",
    category: "МУЛЬТИВИТАМИНЫ",
    type: "Multivitamins",
    formulation: "Multi-VITY MEN · 23 жизненно важных питательных вещества",
    ingredients: ["Magnesium", "Zinc", "Selenium", "Vitamin D3", "Vitamin B6", "Vitamin B12", "Vitamin C", "Vitamin E", "Vitamin K", "Iron", "Copper", "Chromium"],
    format: "Tablets",
    purpose: "Specialized formula intended to support energy levels, muscle function and heart health.",
    accent: "blue",
    image: "/vity-multi-man.png"
  },
  {
    slug: "multi-vity-woman",
    name: "Multivitamins for women",
    category: "МУЛЬТИВИТАМИНЫ",
    type: "Multivitamins",
    formulation: "Multi-VITY WOMEN · 23 жизненно важных питательных вещества",
    ingredients: ["Iron", "Folic Acid (Vitamin B9)", "Biotin", "Zinc", "Vitamin D", "Vitamin C", "Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12", "Calcium", "Iodine"],
    format: "Tablets",
    purpose: "Specialized formula intended to support hair, skin, nails and digestion.",
    accent: "coral",
    image: "/vity-multi-woman.png"
  },
  {
    slug: "multi-vity-kids",
    name: "Multivitamins for KIDS 3+",
    category: "МУЛЬТИВИТАМИНЫ",
    type: "Multivitamins",
    formulation: "Multi-VITY KIDS · Мультивитамины",
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B6", "Folic Acid (Vitamin B9)", "Vitamin B12", "Pantothenic Acid", "Iodine", "Iron", "Zinc"],
    format: "Chewable tablets 3+ · Fruit flavor",
    purpose: "Intended to support children's immunity, normal bone development and energy.",
    accent: "amber",
    image: "/vity-multi-kids.png"
  },
  {
    slug: "c-vity-1000",
    name: "VITAMIN C 1000 mg",
    category: "ВИТАМИНЫ ДЛЯ ИММУНИТЕТА",
    type: "Immunity",
    formulation: "C-VITY 1000 1000 мг",
    ingredients: ["Vitamin C"],
    format: "Orange flavor",
    code: "C-1000-ORG",
    accent: "amber",
    image: cVity1000Transparent
  },
  {
    slug: "probiotic-vity",
    name: "PROBIOTIC with PREBIOTICS 6 Billion and VITAMIN C",
    category: "ПРОБИОТИКИ",
    type: "Probiotics",
    formulation: "PROBIOTIV VITY 6 миллиардов живых бактерий",
    ingredients: ["L. Bulgaricus", "L. Acidophilus", "L. Helveticus", "S. Thermophilus", "B. Bifidum", "Prebiotics", "Vitamin C"],
    code: "PRO-BIO-6B",
    accent: "teal",
    image: "/vity-probiotic.png"
  },
  {
    slug: "selen-vity-100",
    name: "SELENIUM 100mcg with ZINC 2mg",
    category: "SELEN-VITY",
    type: "SELEN-VITY",
    formulation: "Селен",
    ingredients: ["Selenium"],
    purpose: "Support stress management and thyroid health.",
    code: "SEL-100",
    accent: "teal",
    image: selenTransparent
  },
  {
    slug: "b-complex-vity",
    name: "VITAMIN B COMPLEX",
    category: "КОМПЛЕКС ВИТАМИНОВ ГРУППЫ B",
    type: "B-Complex",
    formulation: "B-COMPLEX VITY · Витамины группы B",
    ingredients: ["B vitamins"],
    format: "Tablet",
    purpose: "Support nervous system and metabolism.",
    code: "B-CMPLX-60",
    accent: "coral",
    image: "/vity-b-complex.png"
  },
  {
    slug: "iron-40",
    name: "Iron 40 mg + B9 (Folic Acid) + Vitamin C",
    category: "ЖЕЛЕЗО",
    type: "Iron",
    formulation: "Железо 40 мг",
    ingredients: ["Iron", "Vitamin B9", "Vitamin C"],
    code: "IRN-40-FOL",
    accent: "coral",
    image: "/vity-iron-40-transparent.png"
  },
  {
    slug: "iron-20",
    name: "Iron 20 mg + B9 (Folic Acid) + Vitamin C",
    category: "ЖЕЛЕЗО",
    type: "Iron",
    formulation: "Железо 20 мг",
    ingredients: ["Iron", "Vitamin B9", "Vitamin C"],
    code: "IRN-20-FOL",
    accent: "coral",
    image: "/vity-iron-20-transparent.png"
  },
  {
    slug: "zinc-15",
    name: "Zinc 15 mg",
    category: "ЖЕЛЕЗО",
    type: "Zinc",
    formulation: "Продукт с одним минеральным компонентом",
    ingredients: ["Zinc"],
    purpose: "Single mineral product",
    code: "ZN-15",
    accent: "teal",
    image: "/vity-zinc-15-transparent.png"
  }
];

export const categories = [
  { slug: "d-vity", name: "D-VITY", subtitle: "Vitamin D3", description: "Four Vitamin D3 formulations." },
  { slug: "multi-vity", name: "Multi-VITY", subtitle: "Multivitamin Complexes", description: "Multivitamin complexes." },
  { slug: "immunity", name: "Immunity & Microflora", subtitle: "Targeted Formulations", description: "Targeted formulations." },
  { slug: "minerals", name: "Essential Minerals", subtitle: "Iron & Zinc", description: "Mineral formulations." }
];

export function getProduct(slug: string) { 
  return products.find((product) => product.slug === slug); 
}

const russianCatalogText: Record<string, string> = {
  "ВИТАМИН D3": "ВИТАМИН D3",
  "МУЛЬТИВИТАМИНЫ": "МУЛЬТИВИТАМИНЫ",
  "ВИТАМИНЫ ДЛЯ ИММУНИТЕТА": "ВИТАМИНЫ ДЛЯ ИММУНИТЕТА",
  "ПРОБИОТИКИ": "ПРОБИОТИКИ",
  "SELEN-VITY": "SELEN-VITY",
  "КОМПЛЕКС ВИТАМИНОВ ГРУППЫ B": "КОМПЛЕКС ВИТАМИНОВ ГРУППЫ B",
  "ЖЕЛЕЗО": "ЖЕЛЕЗО",
  "D-VITY — Vitamin D3": "ВИТАМИН D3",
  "Multi-VITY — Multivitamins": "МУЛЬТИВИТАМИНЫ",
  "Immunity, Nervous System & Microflora": "ВИТАМИНЫ ДЛЯ ИММУНИТЕТА",
  "Essential Minerals": "ЖЕЛЕЗО",
  "Vitamin D3": "Витамин D3",
  "Multivitamins": "Мультивитамины",
  "Immunity": "Витамины для иммунитета",
  "Probiotics": "Пробиотики",
  "B-Complex": "Комплекс витаминов группы B",
  "Iron": "Железо",
  "Zinc": "Цинк",
  "Selenium": "Селен",
  "Vitamin C": "Витамин C",
  "Vitamin B9": "Витамин B9",
  "B vitamins": "Витамины группы B",
  "Prebiotics": "Пребиотики",
  "Magnesium": "Магний",
  "Copper": "Медь",
  "Chromium": "Хром",
  "Biotin": "Биотин",
  "Calcium": "Кальций",
  "Iodine": "Йод",
  "Folic Acid (Vitamin B9)": "Фолиевая кислота (витамин B9)",
  "Pantothenic Acid": "Пантотеновая кислота",
  "Tablet": "Таблетки",
  "Tablets": "Таблетки",
  "Chewable · Natural raspberry flavor": "Жевательные таблетки · натуральный вкус малины",
  "Orange flavor": "Апельсиновый вкус",
  "Chewable tablets 3+ · Fruit flavor": "Жевательные таблетки 3+",
  "For children from 3 years": "Для детей от 3 лет",
  "Single mineral product": "Продукт с одним минеральным компонентом"
};

export function catalogText(value: string, lang: Lang): string {
  if (lang === "en") return value;
  return russianCatalogText[value] ?? (value.startsWith("Vitamin ") ? value.replace("Vitamin ", "Витамин ") : value);
}

export function localizeProduct(product: Product, lang: Lang): Product {
  if (!product) return product;
  if (lang === "en") return product;
  return {
    ...product,
    category: catalogText(product.category, lang),
    type: catalogText(product.type, lang),
    ingredients: Array.isArray(product.ingredients) 
      ? product.ingredients.map(value => catalogText(value, lang))
      : [],
    ...(product.formulation ? { formulation: catalogText(product.formulation, lang) } : {}),
    ...(product.format ? { format: catalogText(product.format, lang) } : {}),
    ...(product.purpose ? { purpose: catalogText(product.purpose, lang) } : {}),
  };
}
