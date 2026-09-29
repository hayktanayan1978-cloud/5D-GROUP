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
  { slug: "d-vity-5000-chewable", name: "VITAMIN D3 5000 IU Chewable tablets", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 5000\n5000 IU / 125 mcg", ingredients: ["Vitamin D3"], format: "Chewable · Natural raspberry flavor", code: "D-5000-CHW", accent: "blue", image: "assets/vity-d3-5000-chewable.png" },
  { slug: "d-vity-5000-tablets", name: "VITAMIN D3 5000 IU tablets", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 5000\n5000 IU / 125 mcg", ingredients: ["Vitamin D3"], format: "Tablet", code: "D-5000-TAB", accent: "blue", image: "assets/vity-d3-5000-tablets.png" },
  { slug: "d-vity-2000", name: "VITAMIN D3 2000 IU tablets", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 2000\n2000 IU / 50 mcg", ingredients: ["Vitamin D3"], format: "Tablet", code: "D-2000-TAB", accent: "blue", image: "assets/vity-d3-2000.png" },
  { slug: "d-vity-400-kids", name: "VITAMIN D3 400 IU Chewable tablets for Kids", category: "D-VITY — Vitamin D3", type: "Vitamin D3", formulation: "D-VITY 400 Kids\n400 IU / 10 mcg", ingredients: ["Vitamin D3"], purpose: "For children from 3 years", code: "D-400-KIDS", accent: "coral", image: "assets/vity-d3-400-kids.png" },
  { slug: "c-vity-1000", name: "VITAMIN C 1000 mg", category: "Immunity, Nervous System & Microflora", type: "Immunity", formulation: "C-VITY 1000\n1000 mg", ingredients: ["Vitamin C"], format: "Orange flavor", code: "C-1000-ORG", accent: "amber", image: "assets/vity-c-1000-transparent.png" },
  { slug: "probiotic-vity", name: "PROBIOTIC with PREBIOTICS 6 Billion and VITAMIN C", category: "Immunity, Nervous System & Microflora", type: "Probiotics", formulation: "PROBIOTIV VITY \n6 billion live bacteria", ingredients: ["L. Bulgaricus", "L. Acidophilus", "L. Helveticus", "S. Thermophilus", "B. Bifidum", "Prebiotics", "Vitamin C"], code: "PRO-BIO-6B", accent: "teal", image: "assets/vity-probiotic.png" },
  { slug: "selen-vity-100", name: "SELENIUM 100mcg\u00a0with ZINC 2mg \u00a0", category: "Immunity, Nervous System & Microflora", type: "SELEN-VITY", ingredients: ["Selenium"], purpose: "High bioavailability; positioned for stress management and thyroid support in the VITY B2B catalog.", accent: "teal", image: "assets/vity-selen-100-transparent.png" },
  { slug: "b-complex-vity", name: "B-COMPLEX VITY", category: "Immunity, Nervous System & Microflora", type: "B-Complex", ingredients: ["B vitamins"], format: "Tablet", purpose: "Positioned for nervous system and metabolism support in the VITY B2B catalog.", code: "B-CMPLX-60", accent: "coral" },
  { slug: "iron-40", name: "Iron 40 mg + B9 + Vitamin C", category: "Essential Minerals", type: "Iron", formulation: "Iron 40 mg", ingredients: ["Iron", "Vitamin B9", "Vitamin C"], code: "IRN-40-FOL", accent: "coral" },
  { slug: "iron-20", name: "Iron 20 mg + B9 + Vitamin C", category: "Essential Minerals", type: "Iron", formulation: "Iron 20 mg", ingredients: ["Iron", "Vitamin B9", "Vitamin C"], code: "IRN-20-FOL", accent: "coral" },
  { slug: "zinc-15", name: "Zinc 15 mg", category: "Essential Minerals", type: "Zinc", formulation: "15 mg", ingredients: ["Zinc"], purpose: "Single mineral product", code: "ZN-15", accent: "teal" },
];

export const categories = [
  { slug: "d-vity", name: "D-VITY", subtitle: "Vitamin D3", description: "Four precisely identified Vitamin D3 formulations for adults and children." },
  { slug: "multi-vity", name: "Multi-VITY", subtitle: "Multivitamin Complexes", description: "Tablet and children's chewable formulations described in the official catalog. Product names and codes await approved catalog detail." },
  { slug: "immunity", name: "Immunity & Microflora", subtitle: "Targeted Formulations", description: "Vitamin C, probiotics, selenium and B-complex products presented for professional distribution." },
  { slug: "minerals", name: "Essential Minerals", subtitle: "Iron & Zinc", description: "Focused mineral formulations using exact available catalog information." },
];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
