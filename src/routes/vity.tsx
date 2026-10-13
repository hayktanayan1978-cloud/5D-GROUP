import { createFileRoute, Link } from "@tanstack/react-router";
import { Landmark, Award, BookOpen, Boxes } from "lucide-react";
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
    heroEyebrow: isRu ? "ЭКСКЛЮЗИВНЫЙ БРЕНД" : "EXCLUSIVE BRAND",
    heroTitle: "VITY Vitamins & Supplements",
    heroText: isRu
      ? "Британский бренд витаминов и пищевых добавок, эксклюзивным представителем и дистрибьютором которого на территории ЕАЭС является 5D Group."
      : "British vitamins and supplements brand, exclusively represented and distributed by 5D Group throughout the EAEU.",
    secEyebrow: isRu ? "ПОЧЕМУ VITY" : "WHY VITY",
    secTitle: isRu 
      ? "Профессиональный портфель с британской идентичностью" 
      : "Professional portfolio with British identity",
    secDesc: isRu
      ? "Высококачественные формулы, разработанные для удовлетворения ключевых потребностей рынка ЕАЭС."
      : "High-quality formulations developed to meet key EAEU market demands.",
    catalogBtn: isRu ? "Смотреть каталог" : "View Catalog",
    partnerBtn: isRu ? "Запрос партнерства" : "Partner Inquiry",
    cards: [
      {
        icon: Landmark,
        title: isRu ? "Британское происхождение" : "British Origin",
        text: isRu
          ? "Производство в Великобритании в соответствии с жесткими европейскими стандартами."
          : "UK manufacturing under strict European quality standards."
      },
      {
        icon: Award,
        title: isRu ? "Стандарты качества" : "Quality Standards",
        text: isRu
          ? "Высокая биодоступность, отборное сырье и строгий контроль на всех этапах."
          : "High bioavailability, selected raw materials, and strict quality control."
      },
      {
        icon: BookOpen,
        title: isRu ? "Профессиональный B2B-подход" : "Professional B2B Approach",
        text: isRu
          ? "Полное сопровождение госрегистрации и гибкие условия для дистрибьюторов."
          : "Full regulatory compliance support and flexible terms for distributors."
      },
      {
        icon: Boxes,
        title: isRu ? "Широкий ассортимент" : "Wide Assortment",
        text: isRu
          ? "Витамин D3, мультивитамины, пробиотики и целевые минеральные комплексы."
          : "Vitamin D3, multivitamins, probiotics, and targeted mineral complexes."
      }
    ]
  };

  return (
    <div className="space-y-16 pb-16">
      <PageHero
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        description={copy.heroText}
        image="/vity-hero-d3-selen.jpg"
      />

      <section className="section-shell">
        <SectionHeading
          eyebrow={copy.secEyebrow}
          title={copy.secTitle}
          description={copy.secDesc}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md">
                <div className="grid size-10 place-items-center rounded-lg bg-teal/10 text-teal">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#005587] hover:bg-[#004066]">
            <Link to="/products">{copy.catalogBtn}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">{copy.partnerBtn}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
