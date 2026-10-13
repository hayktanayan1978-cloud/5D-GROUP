import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const lang = useLang();

  const content = {
    en: {
      badge: "Exclusive VITY partner across the EAEU",
      heroTitle: "Connecting trusted supplement brands with the EAEU market.",
      heroDesc: "Exclusive EAEU representation and distribution of VITY Vitamins & Supplements from the United Kingdom.",
      catalogBtn: "Explore Product Catalog",
      partnerBtn: "B2B Partnership",
      stats: [
        { label: "Markets Covered", val: "EAEU Wide" },
        { label: "Product Portfolio", val: "14+ Formulations" },
        { label: "Quality Assurance", val: "UK Manufactured" },
      ],
      secTitle: "Professional B2B Distribution",
      secDesc: "5D Group provides complete regulatory support, supply chain logistics, and brand management for premium nutraceutical lines."
    },
    ru: {
      badge: "Эксклюзивный партнер VITY на территории ЕАЭС",
      heroTitle: "Связываем проверенные бренды БАД с рынком ЕАЭС.",
      heroDesc: "Эксклюзивное представительство и дистрибуция британских витаминов и добавок VITY в странах ЕАЭС.",
      catalogBtn: "Каталог продукции",
      partnerBtn: "B2B Партнерство",
      stats: [
        { label: "Охват рынков", val: "Страны ЕАЭС" },
        { label: "Портфель продукции", val: "14+ рецептур" },
        { label: "Стандарт качества", val: "Производство Великобритания" },
      ],
      secTitle: "Профессиональная B2B дистрибуция",
      secDesc: "5D Group обеспечивает полную регуляторную поддержку, логистику поставок и управление брендом для премиальных линий нутрицевтики."
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="space-y-16 pb-16">
      <section className="section-shell pt-12 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal">
              <span className="size-2 rounded-full bg-teal" />
              {t.badge}
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">{t.catalogBtn} <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/partnership">{t.partnerBtn}</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border bg-surface p-4">
            <img 
              src="/vity-hero-d3-selen.jpg" 
              alt="VITY Supplement Lineup" 
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="border-y bg-surface/50 py-12">
        <div className="section-shell grid gap-8 sm:grid-cols-3">
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="font-display text-2xl font-bold text-teal">{stat.val}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">{t.secTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.secDesc}</p>
        </div>
      </section>
    </div>
  );
}
