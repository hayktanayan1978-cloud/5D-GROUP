import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Handshake, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/partnership")({
  component: PartnershipComponent,
});

function PartnershipComponent() {
  const lang = useLang();
  const isRu = lang === "ru";

  const t = {
    badge: isRu ? "B2B ПАРТНЕРСТВО" : "B2B PARTNERSHIP",
    title: isRu ? "Надежное партнерство для производителей и аптечных сетей" : "Strategic Partnership for Manufacturers & Retail Networks",
    desc: isRu 
      ? "Мы предлагаем выгодные коммерческие условия для аптечных сетей, дистрибьюторов и контрактных производителей."
      : "We offer attractive commercial terms for pharmacy chains, regional distributors, and contract manufacturing partners.",
    btn: isRu ? "Отправить запрос" : "Send Inquiry",
    cards: [
      {
        icon: Handshake,
        title: isRu ? "Эксклюзивные Права" : "Exclusive Distribution",
        desc: isRu ? "Защищенная территория и долгосрочные контракты." : "Territory protection and structured long-term agreements."
      },
      {
        icon: TrendingUp,
        title: isRu ? "Маркетинговая Поддержка" : "Commercial Support",
        desc: isRu ? "POS-материалы, обучение персонала и рекламные акции." : "POS materials, staff training, and promotional campaigns."
      },
      {
        icon: Building2,
        title: isRu ? "Гибкие Условия" : "Flexible Terms",
        desc: isRu ? "Индивидуальные графики поставок и финансовые условия." : "Tailored delivery schedules and transparent credit terms."
      },
      {
        icon: Award,
        title: isRu ? "Премиальный Портфель" : "Premium Portfolio",
        desc: isRu ? "Европейское качество с высокой маржинальностью." : "High-margin European quality formulations."
      }
    ]
  };

  return (
    <div className="section-shell py-12 md:py-20">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-teal">
          {t.badge}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {t.title}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          {t.desc}
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-[#005587] hover:bg-[#004066]">
            <Link to="/contact">{t.btn}</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.cards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="grid size-10 place-items-center rounded-lg bg-teal/10 text-teal">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
