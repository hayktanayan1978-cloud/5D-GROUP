import dVity5000ChewableAsset from "@/assets/vity-d3-5000-chewable.png.asset.json";
import dVity5000TabletsAsset from "@/assets/vity-d3-5000-tablets.png.asset.json";
import dVity400KidsAsset from "@/assets/vity-d3-400-kids.png.asset.json";
import dVity2000Asset from "@/assets/vity-d3-2000.png.asset.json";
import cVity1000Transparent from "@/assets/vity-c-1000-transparent.png";
import selenTransparent from "@/assets/vity-selen-100-transparent.png";
import probioticAsset from "@/assets/vity-probiotic.png.asset.json";
import bComplexAsset from "@/assets/vity-b-complex.png.asset.json";
import iron40Transparent from "@/assets/vity-iron-40-transparent.png";
import iron20Transparent from "@/assets/vity-iron-20-transparent.png";
import zinc15Transparent from "@/assets/vity-zinc-15-transparent.png";
import multiManAsset from "@/assets/vity-multi-man.png.asset.json";
import multiWomanAsset from "@/assets/vity-multi-woman.png.asset.json";
import multiKidsAsset from "@/assets/vity-multi-kids.png.asset.json";


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
  { slug: "d-vity-5000-chewable", name: "VITAMIN D3 5000 IU Chewable tablets", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 5000\n5000 IU / 125 mcg", ingredients: ["Vitamin D3"], format: "Chewable · Natural raspberry flavor", code: "D-5000-CHW", accent: "blue", image: dVity5000ChewableAsset.url },
  { slug: "d-vity-5000-tablets", name: "VITAMIN D3 5000 IU tablets", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 5000\n5000 IU / 125 mcg", ingredients: ["Vitamin D3"], format: "Tablet", code: "D-5000-TAB", accent: "blue", image: dVity5000TabletsAsset.url },
  { slug: "d-vity-2000", name: "VITAMIN D3 2000 IU tablets", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 2000\n2000 IU / 50 mcg", ingredients: ["Vitamin D3"], format: "Tablet", code: "D-2000-TAB", accent: "blue", image: dVity2000Asset.url },
  { slug: "d-vity-400-kids", name: "VITAMIN D3 400 IU Chewable tablets for Kids", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 400 Kids\n400 IU / 10 mcg", ingredients: ["Vitamin D3"], purpose: "For children from 3 years", code: "D-400-KIDS", accent: "coral", image: dVity400KidsAsset.url },
  { slug: "multi-vity-man", name: "Multivitamins for men", category: "Multi-VITY — Multivitamins", type: "Multivitamins", formulation: "Multi-VITY MEN Multivitamins\u00a023 vital nutrients", ingredients: ["Magnesium", "Zinc", "Selenium", "Vitamin D3", "Vitamin B6", "Vitamin B12", "Vitamin C", "Vitamin E", "Vitamin K", "Iron", "Copper", "Chromium"], format: "Tablets", purpose: "Specialized formula intended to support high energy levels, muscle function, stress resilience and heart health.", accent: "blue", image: multiManAsset.url },
  { slug: "multi-vity-woman", name: "Multivitamins for women", category: "Multi-VITY — Multivitamins", type: "Multivitamins", formulation: "Multi-VITY WOMEN Multivitamins 23 vital nutrients", ingredients: ["Iron", "Folic Acid (Vitamin B9)", "Biotin", "Zinc", "Vitamin D", "Vitamin C", "Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12", "Calcium", "Iodine"], format: "Tablets", purpose: "Specialized formula intended to support healthy hair, skin and nails, digestion and women's vitality.", accent: "coral", image: multiWomanAsset.url },
  { slug: "multi-vity-kids", name: "Multivitamins for KIDS 3+", category: "Multi-VITY — Multivitamins", type: "Multivitamins", formulation: "Multi-VITY KIDS Multivitamins", ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B6", "Folic Acid (Vitamin B9)", "Vitamin B12", "Pantothenic Acid", "Iodine", "Iron", "Zinc"], format: "Chewable tablets 3+ · Fruit flavor, 4 vitamin varieties", purpose: "Intended to support children's immunity, normal bone and teeth development and physical energy.", accent: "amber", image: multiKidsAsset.url },
  { slug: "c-vity-1000", name: "VITAMIN C 1000 mg", category: "Immunity, Nervous System & Microflora", type: "Immunity", formulation: "C-VITY 1000\n1000 mg", ingredients: ["Vitamin C"], format: "Orange flavor", code: "C-1000-ORG", accent: "amber", image: cVity1000Transparent },
  { slug: "probiotic-vity", name: "PROBIOTIC with PREBIOTICS 6 Billion and VITAMIN C", category: "Immunity, Nervous System & Microflora", type: "Probiotics", formulation: "PROBIOTIV VITY \n6 billion live bacteria", ingredients: ["L. Bulgaricus", "L. Acidophilus", "L. Helveticus", "S. Thermophilus", "B. Bifidum", "Prebiotics", "Vitamin C"], code: "PRO-BIO-6B", accent: "teal", image: probioticAsset.url },
  { slug: "selen-vity-100", name: "SELENIUM 100mcg\u00a0with ZINC 2mg \u00a0", category: "Immunity, Nervous System & Microflora", type: "SELEN-VITY", ingredients: ["Selenium"], purpose: "High bioavailability; positioned for stress management and thyroid support in the VITY B2B catalog.", accent: "teal", image: selenTransparent },
  { slug: "b-complex-vity", name: "VITAMIN B COMPLEX", category: "Immunity, Nervous System & Microflora", type: "B-Complex", ingredients: ["B vitamins"], formulation: "B-COMPLEX VITY B vitamins", format: "Tablet", purpose: "Positioned for nervous system and metabolism support in the VITY B2B catalog.", code: "B-CMPLX-60", accent: "coral", image: bComplexAsset.url },
  { slug: "iron-40", name: "Iron 40 mg + B9 (Folic Acid) + Vitamin C", category: "Essential Minerals", type: "Iron", formulation: "Iron 40 mg", ingredients: ["Iron", "Vitamin B9", "Vitamin C"], code: "IRN-40-FOL", accent: "coral", image: iron40Transparent },
  { slug: "iron-20", name: "Iron 20 mg + B9 (Folic Acid) + Vitamin C", category: "Essential Minerals", type: "Iron", formulation: "Iron 20 mg", ingredients: ["Iron", "Vitamin B9", "Vitamin C"], code: "IRN-20-FOL", accent: "coral", image: iron20Transparent },
  { slug: "zinc-15", name: "Zinc 15 mg", category: "Essential Minerals", type: "Zinc", formulation: "Zinc VITY 15 mg", ingredients: ["Zinc"], purpose: "Single mineral product", code: "ZN-15", accent: "teal", image: zinc15Transparent },
];

export const categories = [
  { slug: "d-vity", name: "D-VITY", subtitle: "Vitamin D3", description: "Four precisely identified Vitamin D3 formulations for adults and children." },
  { slug: "multi-vity", name: "Multi-VITY", subtitle: "Multivitamin Complexes", description: "Multivitamin complexes for men, women and children from the official catalog. Product codes await approved catalog detail." },
  { slug: "immunity", name: "Immunity & Microflora", subtitle: "Targeted Formulations", description: "Vitamin C, probiotics, selenium and B-complex products presented for professional distribution." },
  { slug: "minerals", name: "Essential Minerals", subtitle: "Iron & Zinc", description: "Focused mineral formulations using exact available catalog information." },
];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
