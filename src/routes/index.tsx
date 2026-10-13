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
    desc: isRu 
      ? "Эксклюзивное представительство и дистрибуция витаминов и комплексов VITY из Великобритании на территории ЕАЭС." 
      : "Exclusive EAEU representation and distribution of VITY Vitamins & Supplements from the United Kingdom.",
    btnCatalog: isRu ? "Каталог продукции VITY ↗" : "Explore Products ↗",
    btnPartner: isRu ? "Стать партнером" : "B2B Partnership",
    standLabel1: isRu ? "ВЕЛИКОБРИТАНИЯ — ЕАЭС" : "UK — EAEU",
    standLabel2: isRu ? "Профессиональная B2B дистрибуция" : "Professional B2B distribution",
    secBadge: isRu ? "О КОМПАНИИ 5D GROUP" : "ABOUT 5D GROUP",
    secTitle: isRu ? "Надежный партнер для регулируемых и профессиональных рынков" : "Trusted Partner for Regulated & Professional Markets",
    secDesc: isRu
      ? "Мы работаем с фармацевтическими дистрибьюторами, аптечными сетями, маркетплейсами и другими профессиональными партнерами. Как эксклюзивный представитель VITY Vitamins & Supplements на территории ЕАЭС, наша задача — развитие бренда через чёткое позиционирование и дисциплинированное B2B-сотрудничество."
      : "We partner with pharmaceutical distributors, pharmacy chains, marketplaces, and other professional channels. As the exclusive representative of VITY Vitamins & Supplements in the EAEU, our focus is on brand development through precise positioning and disciplined B2B collaboration.",
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
    <div className="relative min-h-screen bg-background animate-fade-in">
      {/* 1:1 Lovable Hero Section with Backgorund Laboratory Overlay */}
      <section className="relative overflow-hidden border-b border-slate-200/50 py-16 md:py-24 lg:py-28">
        {/* Background Image Layer (Matching image_23.png exactly) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-85"
          style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0.3) 100%), url('/laboratory-bg.jpg')` }}
        />
        
        {/* Exact Lovable Blue Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
            backgroundSize: `48px 48px`
          }}
        />

        <div className="section-shell relative z-10">
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
                <Button asChild variant="outline" size="lg" className="border-slate-300 bg-white/90 backdrop-blur-sm">
                  <Link to="/partnership">{t.btnPartner}</Link>
                </Button>
              </div>
            </div>

            {/* Natural Product Stand on the Right */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <img 
                  src="/vity-lineup.png" 
                  alt="VITY Products Display" 
                  className="w-full object-contain rounded-xl hover:scale-[1.02] transition-transform duration-300" 
                />
                <div className="mt-3 border-t border-slate-100 pt-3 text-right">
                  <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider leading-relaxed">
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

          {/* 4 Custom Subtle Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
