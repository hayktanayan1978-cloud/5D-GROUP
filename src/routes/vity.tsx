import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, BookOpen, Boxes, Landmark } from "lucide-react";
import { PageHero } from "@/components/page-hero"; 
import { SectionHeading } from "@/components/section-heading"; 
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/vity")({
  head: () => ({
    meta: [
      { title: "5D Group — VITY Vitamins & Supplements" },
      { name: "description", content: "Exclusive brand representation." }
    ]
  }),
  component: Vity
});

function Vity() {
  const lang = useLang();
  
  const isRu = lang === "ru";

  const copy = {
    heroEyebrow: isRu ? "Эксклюзивный бренд" : "Exclusive brand",
    heroTitle: "VITY Vitamins & Supplements",
    heroText: isRu 
      ? "Британский бренд витаминов и пищевых добавок, эксклюзивным представителем и дистрибьютором которого на территории ЕАЭС является 5D Group."
      : "British vitamins and supplements, exclusively represented and distributed by 5D Group throughout the EAEU.",
    whyEyebrow: isRu ? "Почему VITY" : "Why VITY",
    whyTitle: isRu ? "Профессиональный портфель с британской идентичностью" : "A professional portfolio with a British identity",
    standardsEyebrow: isRu ? "Качество и стандарты" : "Quality & Standards",
    standardsTitle: isRu ? "Система соответствия согласно каталогу" : "Catalog-stated compliance framework",
    standardsText: isRu
      ? "В официальном B2B-каталоге VITY упоминаются следующие стандарты и организации. Это не утверждение о наличии дополнительных сертификатов."
      : "The official VITY B2B catalog references the following standards and institutions. This presentation does not claim certifications beyond the catalog wording.",
    exploreButton: isRu ? "Смотреть продукцию" : "Explore products",
  };

  const cards = [
    {
      icon: Landmark,
      title: isRu ? "Британское происхождение" : "British Standards",
      text: isRu ? "VITY позиционируется как британский бренд витаминов и добавок." : "Positioned as a British vitamins and supplements brand."
    },
    {
      icon: BadgeCheck,
      title: isRu ? "Стандарты качества" : "Quality Framework",
      text: isRu ? "В B2B-каталоге упоминаются GMP, MHRA, BRC, ISO 9001:2008, EFSA, FSA и EAC." : "The catalog references GMP, MHRA, BRC, ISO 9001:2008, EFSA, FSA and EAC."
    },
    {
      icon: BookOpen,
      title: isRu ? "Профессиональный B2B-подход" : "Professional B2B Focus",
      text: isRu ? "Официальный B2B-каталог VITY предназначен для делового сотрудничества." : "An official B2B catalog supports professional commercial partnerships."
    },
    {
      icon: Boxes,
      title: isRu ? "Широкий ассортимент" : "Broad Portfolio",
      text: isRu ? "Витамины, мультивитамины, пробиотики, специализированные БАД и минералы." : "Vitamins, multivitamins, probiotics, specialty supplements and minerals."
    }
  ];

  const standards = ["GMP", "MHRA", "BRC", "ISO 9001:2008", "EFSA", "FSA", "EAC"];

  return (
    <>
      <PageHero 
        eyebrow={copy.heroEyebrow} 
        title={copy.heroTitle} 
        text={copy.heroText} 
        aside={
          <div className="relative overflow-hidden rounded-2xl border bg-background p-2 shadow-lg">
            <img 
              src="/vity-hero-d3-selen.jpg" 
              alt="VITY Hero Visual" 
              className="h-auto w-full max-w-md rounded-xl object-contain lg:max-w-lg"
            />
          </div>
        }
      />
      <section className="section-pad">
        <div className="section-shell">
          <SectionHeading eyebrow={copy.whyEyebrow} title={copy.whyTitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => { 
              const Icon = card.icon;
              return (
                <article className="rounded-lg border bg-card p-6" key={card.title}>
                  <Icon className="size-6 text-teal" />
                  <h3 className="mt-5 font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.text}</p>
                </article>
              ); 
            })}
          </div>
        </div>
      </section>
      <section className="section-pad border-y bg-surface">
        <div className="section-shell">
          <SectionHeading eyebrow={copy.standardsEyebrow} title={copy.standardsTitle} text={copy.standardsText} />
          <div className="mt-10 flex flex-wrap gap-3">
            {standards.map((x) => (
              <span className="rounded-md border bg-background px-5 py-4 font-display text-sm font-bold text-primary" key={x}>
                {x}
              </span>
            ))}
          </div>
          <Button asChild className="mt-9">
            <Link to="/products">{copy.exploreButton}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
