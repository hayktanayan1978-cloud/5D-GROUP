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
      ? "Британские витамины и БАД, эксклюзивно представленные и дистрибутируемые 5D Group на всей территории ЕАЭС."
      : "British vitamins and supplements, exclusively represented and distributed by 5D Group throughout the EAEU.",
    secTitle: isRu ? "Британский стандарт качества" : "British Quality Standard",
    secDesc: isRu
      ? "Полный портфель рецептур, разработанных для удовлетворения ключевых потребностей рынка ЕАЭС."
      : "Comprehensive portfolio of formulations developed for key EAEU market demands.",
    catalogBtn: isRu ? "Смотреть каталог" : "View Catalog",
    partnerBtn: isRu ? "Запрос партнерства" : "Partner Inquiry",
    cards: [
      {
        icon: BadgeCheck,
        title: isRu ? "Британское качество" : "British Quality",
        text: isRu
          ? "Производство в Великобритании в соответствии с жесткими европейскими стандартами."
          : "UK manufacturing under strict European quality standards."
      },
      {
        icon: Boxes,
        title: isRu ? "14+ Рецептур" : "14+ Formulations",
        text: isRu
          ? "Витамин D3, мультивитамины, пробиотики и целевые минеральные комплексы."
          : "Vitamin D3, multivitamins, probiotics, and targeted mineral complexes."
      },
      {
        icon: Landmark,
        title: isRu ? "Готовность к ЕАЭС" : "EAEU Ready",
        text: isRu
          ? "Полное сопровождение госрегистрации и соответствие требованиям рынка."
          : "Full regulatory documentation and compliance support across EAEU markets."
      },
      {
        icon: BookOpen,
        title: isRu ? "B2B Поддержка" : "B2B Support",
        text: isRu
          ? "Маркетинговые материалы, логистика и гибкие условия для дистрибьюторов."
          : "Marketing assets, supply chain support, and distribution flexibility."
      }
    ]
  };

  return (
    <div className="space-y-16 pb-16">
      <PageHero
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        description={copy.heroText}
        image="/vity-lineup.png"
      />

      <section className="section-shell">
        <SectionHeading
          title={copy.secTitle}
          description={copy.secDesc}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="rounded-2xl border bg-card p-6 transition-all hover:shadow-md">
                <div className="grid size-12 place-items-center rounded-xl bg-teal/10 text-teal">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
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
