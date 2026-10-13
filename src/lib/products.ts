import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, BookOpen, Boxes, Landmark } from "lucide-react";
import { PageHero } from "@/components/page-hero"; import { ProductVisual } from "@/components/product-visual"; import { SectionHeading } from "@/components/section-heading"; import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";
import vityHeroD3SelenAsset from "@/assets/vity-hero-d3-selen.jpg.asset.json";
export const Route=createFileRoute("/vity")({head:()=>({meta:[{title:"VITY Vitamins & Supplements — Exclusive EAEU Brand"},{name:"description",content:"Discover VITY, the British vitamins and supplements brand represented exclusively by 5D Group across the EAEU."},{property:"og:title",content:"VITY — Exclusive Brand Across the EAEU"},{property:"og:description",content:"British vitamins and supplements for professional EAEU distribution."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Vity});

const icons = [Landmark, BadgeCheck, BookOpen, Boxes];

const copy = {
  en: {
    heroEyebrow: "Exclusive brand",
    heroTitle: "VITY Vitamins & Supplements",
    heroText: "British vitamins and supplements, exclusively represented and distributed by 5D Group throughout the EAEU.",
    whyEyebrow: "Why VITY",
    whyTitle: "A professional portfolio with a British identity",
    cards: [
      ["British Standards", "Positioned as a British vitamins and supplements brand."],
      ["Quality Framework", "The catalog references GMP, MHRA, BRC, ISO 9001:2008, EFSA, FSA and EAC."],
      ["Professional B2B Focus", "An official B2B catalog supports professional commercial partnerships."],
      ["Broad Portfolio", "Vitamins, multivitamins, probiotics, specialty supplements and minerals."],
    ],
    standardsEyebrow: "Quality & Standards",
    standardsTitle: "Catalog-stated compliance framework",
    standardsText: "The official VITY B2B catalog references the following standards and institutions. This presentation does not claim certifications beyond the catalog wording.",
    standards: ["GMP", "MHRA", "BRC", "ISO 9001:2008", "EFSA", "FSA", "EAC"],
    exploreButton: "Explore products",
  },
  ru: {
    heroEyebrow: "Эксклюзивный бренд",
    heroTitle: "VITY Vitamins & Supplements",
    heroText: "Британский бренд витаминов и пищевых добавок, эксклюзивным представителем и дистрибьютором которого на территории ЕАЭС является 5D Group.",
    whyEyebrow: "Почему VITY",
    whyTitle: "Профессиональный портфель с британской идентичностью",
    cards: [
      ["Британское происхождение", "VITY позиционируется как британский бренд витаминов и пищевых добавок."],
      ["Стандарты качества", "В B2B-каталоге упоминаются GMP, MHRA, BRC, ISO 9001:2008, EFSA, FSA и EAC."],
      ["Профессиональный B2B-подход", "Официальный B2B-каталог VITY предназначен для делового сотрудничества."],
      ["Широкий ассортимент", "Витамины, мультивитамины, пробиотики, специализированные БАД и минералы."],
    ],
    standardsEyebrow: "Качество и стандарты",
    standardsTitle: "Система соответствия согласно каталогу",
    standardsText: "В официальном B2B-каталоге VITY упоминаются следующие стандарты и организации. Это не утверждение о наличии дополнительных сертификатов.",
    standards: ["GMP", "MHRA", "BRC", "ISO 9001:2008", "EFSA", "FSA", "EAC"],
    exploreButton: "Смотреть продукцию",
  },
} as const;

function Vity() {
  const lang = useLang();
  const t = copy[lang];
  return <>
    <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} text={t.heroText} aside={<ProductVisual name="VITY" accent="blue" image={vityHeroD3SelenAsset.url} large/>}/>
    <section className="section-pad"><div className="section-shell"><SectionHeading eyebrow={t.whyEyebrow} title={t.whyTitle}/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{t.cards.map(([title, text], i) => { const Icon = icons[i] as typeof Landmark; return <article className="rounded-lg border p-6" key={title}><Icon className="size-6 text-teal"/><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>; })}</div></div></section>
    <section className="section-pad border-y bg-surface"><div className="section-shell"><SectionHeading eyebrow={t.standardsEyebrow} title={t.standardsTitle} text={t.standardsText}/><div className="mt-10 flex flex-wrap gap-3">{t.standards.map(x=><span className="rounded-md border bg-background px-5 py-4 font-display text-sm font-bold text-primary" key={x}>{x}</span>)}</div><Button asChild className="mt-9"><Link to="/products">{t.exploreButton}</Link></Button></div></section>
  </>;
}
