import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Globe, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const lang = useLang();
  const isRu = lang === "ru";

  const t = {
    badge: isRu ? "Эксклюзивный партнер VITY на территории ЕАЭС" : "Exclusive VITY partner across the EAEU",
    title: isRu ? "Связываем надежные бренды пищевых добавок с рынком ЕАЭС." : "Connecting trusted supplement brands with the EAEU market.",
    desc: isRu 
      ? "Эксклюзивное представительство и дистрибуция британских витаминов и добавок VITY на территории ЕАЭС." 
      : "Exclusive EAEU representation and distribution of VITY Vitamins & Supplements from the United Kingdom.",
    btnCatalog: isRu ? "Каталог продукции ↗" : "Explore Products ↗",
    btnPartner: isRu ? "B2B Партнерство" : "B2B Partnership",
    secBadge: isRu ? "О КОМПАНИИ 5D GROUP" : "ABOUT 5D GROUP",
    secTitle: isRu ? "Надежный партнер для регулируемых и профессиональных рынков" : "Trusted Partner for Regulated & Professional Markets",
    secDesc: isRu
      ? "5D Group — эксклюзивная дистрибьюторская компания, представляющая британский бренд VITY. Мы обеспечиваем полный цикл продвижения пищевых добавок на рынке ЕАЭС через аптеки и профессиональные торговые каналы."
      : "5D Group is an exclusive distribution business representing British brand VITY, delivering high-quality dietary supplements across EAEU markets through pharmacy and professional channels.",
    cards: [
      {
        icon: Globe,
        title: isRu ? "Рынок ЕАЭС" : "EAEU Market",
        desc: isRu ? "Дистрибуция в Армении и других странах Евразийского союза." : "Distribution in Armenia and across the Eurasian Economic Union."
      },
      {
        icon: Sparkles,
        title: isRu ? "14+ Активных Позиций" : "14+ Formulations",
        desc: isRu ? "Полный портфель рецептур VITY." : "Complete VITY product range."
      },
      {
        icon: Award,
        title: isRu ? "Импорт из Великобритании" : "UK Origin",
        desc: isRu ? "Британское качество и стандарты." : "British quality and standards."
      },
      {
        icon: ShieldCheck,
        title: isRu ? "Стандарты Качества" : "Quality Assurance",
        desc: isRu ? "Официальная госрегистрация и сертификация." : "Full compliance and official registration."
      }
    ]
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image Banner */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-32"
        style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.6) 100%), url('/vity-hero-d3-selen.jpg')` }}
      >
        <div className="section-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal">
                <span className="size-2 rounded-full bg-teal" />
                {t.badge}
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
                {t.title}
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {t.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#005587] hover:bg-[#004066] text-white">
                  <Link to="/products">{t.btnCatalog}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-300">
                  <Link to="/partnership">{t.btnPartner}</Link>
                </Button>
              </div>
            </div>

            {/* Right Stand Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-xl backdrop-blur-sm">
                <img 
                  src="/vity-lineup.png" 
                  alt="VITY Products Display" 
                  className="w-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <section className="bg-slate-50/80 py-16 border-t border-slate-200/60">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                {t.secBadge}
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {t.secTitle}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.secDesc}
              </p>
            </div>
          </div>

          {/* 4 Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md">
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
