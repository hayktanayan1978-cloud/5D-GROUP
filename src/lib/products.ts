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
    category: "D-VITY — Vitamin D3",
    type: "Vitamin D3",
    formulation: "D-VITY 5000\n5000 IU / 125 mcg",
    ingredients: ["Vitamin D3"],
    format: "Chewable · Natural raspberry flavor",
    code: "D-5000-CHW",
    accent: "blue",
    image: "/vity-hero-d3-selen.jpg"
  },
  {
    slug: "d-vity-5000-tablets",
    name: "VITAMIN D3 5000 IU tablets",
    category: "D-VITY — Vitamin D3",
    type: "Vitamin D3",
    formulation: "D-VITY 5000\n5000 IU / 125 mcg",
    ingredients: ["Vitamin D3"],
    format: "Tablet",
    code: "D-5000-TAB",
    accent: "blue",
    image: "/vity-hero-d3-selen.jpg"
  },
  {
    slug: "d-vity-2000",
    name: "VITAMIN D3 2000 IU tablets",
    category: "D-VITY — Vitamin D3",
    type: "Vitamin D3",
    formulation: "D-VITY 2000\n2000 IU / 50 mcg",
    ingredients: ["Vitamin D3"],
    format: "Tablet",
    code: "D-2000-TAB",
    accent: "blue",
    image: "/vity-hero-d3-selen.jpg"
  },
  {
    slug: "d-vity-400-kids",
    name: "VITAMIN D3 400 IU Chewable tablets for Kids",
    category: "D-VITY — Vitamin D3",
    type: "Vitamin D3",
    formulation: "D-VITY 400 Kids\n400 IU / 10 mcg",
    ingredients: ["Vitamin D3"],
    purpose: "For children from 3 years",
    code: "D-400-KIDS",
    accent: "coral",
    image: "/vity-hero-d3-selen.jpg"
  },
  {
    slug: "multi-vity-man",
    name: "Multivitamins for men",
    category: "Multi-VITY — Multivitamins",
    type: "Multivitamins",
    formulation: "Multi-VITY MEN Multivitamins 23 vital nutrients",
    ingredients: ["Magnesium", "Zinc", "Selenium", "Vitamin D3", "Vitamin B6", "Vitamin B12", "Vitamin C", "Vitamin E", "Vitamin K", "Iron", "Copper", "Chromium"],
    format: "Tablets",
    purpose: "Specialized formula intended to support energy levels, muscle function and heart health.",
    accent: "blue",
    image: "/vity-multi-man.png"
  },
  {
    slug: "multi-vity-woman",
    name: "Multivitamins for women",
    category: "Multi-VITY — Multivitamins",
    type: "Multivitamins",
    formulation: "Multi-VITY WOMEN Multivitamins 23 vital nutrients",
    ingredients: ["Iron", "Folic Acid (Vitamin B9)", "Biotin", "Zinc", "Vitamin D", "Vitamin C", "Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12", "Calcium", "Iodine"],
    format: "Tablets",
    purpose: "Specialized formula intended to support hair, skin, nails and digestion.",
    accent: "coral",
    image: "/vity-multi-woman.png"
  },
  {
    slug: "multi-vity-kids",
    name: "Multivitamins for KIDS 3+",
    category: "Multi-VITY — Multivitamins",
    type: "Multivitamins",
    formulation: "Multi-VITY KIDS Multivitamins",
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B6", "Folic Acid (Vitamin B9)", "Vitamin B12", "Pantothenic Acid", "Iodine", "Iron", "Zinc"],
    format: "Chewable tablets 3+ · Fruit flavor, 4 vitamin varieties",
    purpose: "Intended to support children's immunity, normal bone development and energy.",
    accent: "amber",
    image: "/vity-multi-kids.png"
  },
  {
    slug: "c-vity-1000",
    name: "VITAMIN C 1000 mg",
    category: "Immunity, Nervous System & Microflora",
    type: "Immunity",
    formulation: "C-VITY 1000\n1000 mg",
    ingredients: ["Vitamin C"],
    format: "Orange flavor",
    code: "C-1000-ORG",
    accent: "amber",
    image: cVity1000Transparent
  },
  {
    slug: "probiotic-vity",
    name: "PROBIOTIC with PREBIOTICS 6 Billion and VITAMIN C",
    category: "Immunity, Nervous System & Microflora",
    type: "Probiotics",
    formulation: "PROBIOTIV VITY \n6 billion live bacteria",
    ingredients: ["L. Bulgaricus", "L. Acidophilus", "L. Helveticus", "S. Thermophilus", "B. Bifidum", "Prebiotics", "Vitamin C"],
    code: "PRO-BIO-6B",
    accent: "teal",
    image: "/vity-probiotic.png"
  },
  {
    slug: "selen-vity-100",
    name: "SELENIUM 100mcg with ZINC 2mg",
    category: "Immunity, Nervous System & Microflora",
    type: "SELEN-VITY",
    ingredients: ["Selenium"],
    purpose: "High bioavailability; positioned for stress management and thyroid support.",
    accent: "teal",
    image: selenTransparent
  },
  {
    slug: "b-complex-vity",
    name: "VITAMIN B COMPLEX",
    category: "Immunity, Nervous System & Microflora",
    type: "B-Complex",
    ingredients: ["B vitamins"],
    formulation: "B-COMPLEX VITY B vitamins",
    format: "Tablet",
    purpose: "Positioned for nervous system and metabolism support.",
    code: "B-CMPLX-60",
    accent: "coral",
    image: "/vity-lineup.png"
  },
  {
    slug: "iron-40",
    name: "Iron 40 mg + B9 (Folic Acid) + Vitamin C",
    category: "Essential Minerals",
    type: "Iron",
    formulation: "Iron 40 mg",
    ingredients: ["Iron", "Vitamin B9", "Vitamin C"],
    code: "IRN-40-FOL",
    accent: "coral",
    image: "/vity-lineup.png"
  },
  {
    slug: "iron-20",
    name: "Iron 20 mg + B9 (Folic Acid) + Vitamin C",
    category: "Essential Minerals",
    type: "Iron",
    formulation: "Iron 20 mg",
    ingredients: ["Iron", "Vitamin B9", "Vitamin C"],
    code: "IRN-20-FOL",
    accent: "coral",
    image: "/vity-lineup.png"
  },
  {
    slug: "zinc-15",
    name: "Zinc 15 mg",
    category: "Essential Minerals",
    type: "Zinc",
    formulation: "Zinc VITY 15 mg",
    ingredients: ["Zinc"],
    purpose: "Single mineral product",
    code: "ZN-15",
    accent: "teal",
    image: "/vity-lineup.png"
  }
];

export const categories = [
  { slug: "d-vity", name: "D-VITY", subtitle: "Vitamin D3", description: "Four precisely identified Vitamin D3 formulations for adults and children." },
  { slug: "multi-vity", name: "Multi-VITY", subtitle: "Multivitamin Complexes", description: "Multivitamin complexes for men, women and children from the official catalog." },
  { slug: "immunity", name: "Immunity & Microflora", subtitle: "Targeted Formulations", description: "Vitamin C, probiotics, selenium and B-complex products." },
  { slug: "minerals", name: "Essential Minerals", subtitle: "Iron & Zinc", description: "Focused mineral formulations using exact available catalog information." }
];

export function getProduct(slug: string) { 
  return products.find((product) => product.slug === slug); 
}

const russianCatalogText: Record<string, string> = {
  "D-VITY — Vitamin D3": "D-VITY — Витамин D3",
  "Multi-VITY — Multivitamins": "Multi-VITY — Мультивитамины",
  "Immunity, Nervous System & Microflora": "Иммунитет, нервная система и микрофлора",
  "Essential Minerals": "Минералы",
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
  "Chewable tablets 3+ · Fruit flavor, 4 vitamin varieties": "Жевательные таблетки для детей от 3 лет · фруктовый вкус, 4 разновидности витаминов",
  "For children from 3 years": "Для детей от 3 лет",
  "Specialized formula intended to support energy levels, muscle function and heart health.": "Специализированная формула для поддержки энергии
