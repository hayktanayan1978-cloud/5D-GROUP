import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  const lang = useLang();
  const isRu = lang === "ru";

  const t = {
    badge: isRu ? "О КОМПАНИИ 5D GROUP" : "ABOUT 5D GROUP",
    title: isRu ? "Международный подход. Целевое развитие рынка." : "International outlook. Focused market development.",
    desc: isRu 
      ? "5D Group связывает надежный портфель британских БАД с профессиональными партнерами по всему ЕАЭС." 
      : "5D Group connects a trusted British supplement portfolio with professional partners throughout the EAEU.",
    profileTitle: isRu ? "ПРОФИЛЬ КОМПАНИИ" : "COMPANY PROFILE",
    p1: isRu 
      ? "5D Group — специализированная дистрибьюторская компания, действующая в Армении и на территории Евразийского экономического союза." 
      : "5D Group is a specialized distribution and commercial development business operating across Armenia and the broader Eurasian Economic Union.",
    p2: isRu 
      ? "Мы специализируемся на премиальной продукции, готовой к регистрации, и тесно сотрудничаем с международными производителями для обеспечения эффективного выхода на быстрорастущие рынки." 
      : "We focus on premium, registration-ready health products and work closely with international manufacturers to provide streamlined access to high-growth markets."
  };

  return (
    <div className="section-shell py-12 md:py-16">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-teal">
          {t.badge}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          {t.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {t.desc}
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {t.profileTitle}
        </h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
      </div>
    </div>
  );
}
