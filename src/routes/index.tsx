import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const lang = useLang();
  const isRu = lang === "ru";

  const t = {
    badge: isRu ? "Эксклюзивный партнер VITY в ЕАЭС" : "Exclusive VITY partner across the EAEU",
    smallLabel: isRu ? "5D GROUP · ФАРМАЦЕВТИЧЕСКАЯ И НУТРИЦЕВТИЧЕСКАЯ ДИСТРИБУЦИЯ" : "5D GROUP · PHARMACEUTICAL & NUTRACEUTICAL DISTRIBUTION",
    title: isRu ? "Связываем\nнадежные\nбренды пищевых\nдобавок с\nрынком ЕАЭС." : "Connecting\ntrusted\nsupplement brands\nwith the\nEAEU market.",
    desc: isRu ? "Эксклюзивное представительство и дистрибуция витаминов и комплексов VITY из Великобритании на территории ЕАЭС." : "Exclusive EAEU representation and distribution of VITY Vitamins & Supplements from the United Kingdom.",
    btnCatalog: isRu ? "Каталог продукции VITY ↗" : "Explore Products ↗",
    btnPartner: isRu ? "Стать партнером" : "B2B Partnership",
    standLabel1: isRu ? "ВЕЛИКОБРИТАНИЯ — ЕАЭС" : "UK — EAEU",
    standLabel2: isRu ? "Профессиональная B2B дистрибуция" : "Professional B2B distribution",
    secBadge: isRu ? "О КОМПАНИИ 5D GROUP" : "ABOUT 5D GROUP",
    secTitle: isRu ? "Надежный партнер для регулируемых и профессиональных рынков" : "Trusted Partner for Regulated & Professional Markets",
    secDesc: isRu ? "Мы работаем с фармацевтическими дистрибьюторами, аптечными сетями, маркетплейсами и другими профессиональными партнерами. Как эксклюзивный представитель VITY Vitamins & Supplements на территории ЕАЭС, наша задача — развитие бренда через чёткое позиционирование и дисциплинированное B2B-сотрудничество." : "We partner with pharmaceutical distributors, pharmacy chains, marketplaces, and other professional channels. As the exclusive representative of VITY Vitamins & Supplements in the EAEU, our focus is on brand development through precise positioning and disciplined B2B collaboration.",
    cards: [
      {
        icon: Globe,
        title: isRu ? "Рынок ЕАЭС" : "EAEU Market",
        desc: isRu ? "Дистрибуция на территории Евразийского союза." : "Distribution across the Eurasian Economic Union."
      },
      {
        icon: Sparkles,
        title: isRu ? "Эксклюзивный бренд" : "Exclusive Brand",
        desc: isRu ? "VITY Vitamins & Supplements." : "VITY Vitamins & Supplements."
      },
      {
        icon: Award,
        title: isRu ? "Фокус на B2B" : "B2B Focus",
        desc: isRu ? "Профессиональная дистрибуция и партнерство." : "Professional distribution and partnerships."
      },
      {
        icon: ShieldCheck,
        title: isRu ? "Стандарты качества" : "Quality Standards",
        desc: isRu ? "Международная система контроля качества." : "International quality control systems."
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* 1:1 Exact Lovable Laboratory Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/50 py-20 md:py-24 lg:py-32">
        {/* Background Image Layer (Original Photo) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-95"
          style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 25%, rgba(255,255,255,0.88) 55%, rgba(255,255,255,0.25) 100%), url('/laboratory-bg.jpg')` }}
        />
        
        {/* Extremely Subtle Blue Grid Overlay (7% opacity for near-invisible pattern) */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
            backgroundSize: `48px 48px`
          }}
        />

        <div className="section-shell relative z-10 animate-fade-in">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-[11px] font-semibold text-teal-800 shadow-sm">
                <span className="size-2 rounded-full bg-teal animate-pulse" />
                {t.badge}
              </div>

              <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-teal-800/80">
                {t.smallLabel}
              </div>

              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12] whitespace-pre-line">
                {t.title}
              </h1>

              <p className="mt-6 max-w-lg text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {t.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#005587] hover:bg-[#004066] text-white shadow-sm">
                  <Link to="/products">{t.btnCatalog}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-300 bg-white/95 backdrop-blur-sm">
                  <Link to="/partnership">{t.btnPartner}</Link>
                </Button>
              </div>
            </div>

            {/* Completely Seamless Transparent Product Display Stand (No bg, border, or shadow) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md bg-transparent overflow-visible">
                <img 
                  src="/vity-lineup.png" 
                  alt="VITY Products Display" 
                  className="w-full object-contain filter drop-shadow-xl"
                />
                <div className="mt-3 text-right bg-white/40 backdrop-blur-xs inline-block ml-auto px-2 py-1 rounded">
                  <p className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                    {t.standLabel1}<br />{t.standLabel2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Company Profile Section */}
      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                {t.secBadge}
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {t.secTitle}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.secDesc}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all hover:shadow-md hover:bg-white hover:-translate-y-1 duration-200">
                  <div className="grid size-10 place-items-center rounded-lg bg-teal/10 text-teal">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
