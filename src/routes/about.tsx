import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  const lang = useLang();

  const content = {
    en: {
      badge: "ABOUT 5D GROUP",
      title: "International outlook. Focused market development.",
      desc: "5D Group connects a trusted British supplement portfolio with professional partners throughout the EAEU.",
      profileTitle: "COMPANY PROFILE",
      p1: "5D Group is a specialized distribution and commercial development business operating across Armenia and the broader Eurasian Economic Union.",
      p2: "We focus on premium, registration-ready health products and work closely with international manufacturers to provide streamlined access to high-growth markets."
    },
    ru: {
      badge: "О КОМПАНИИ 5D GROUP",
      title: "Международный подход. Целевое развитие рынка.",
      desc: "5D Group связывает надежный портфель британских БАД с профессиональными партнерами по всему ЕАЭС.",
      profileTitle: "ПРОФИЛЬ КОМПАНИИ",
      p1: "5D Group — специализированная дистрибьюторская и коммерческая компания, действующая в Армении и на территории Евразийского экономического союза.",
      p2: "Мы специализируемся на премиальной продукции, готовой к регистрации, и тесно сотрудничаем с международными производителями для обеспечения эффективного выхода на быстрорастущие рынки."
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="section-shell py-12 md:py-16">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          {t.badge}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {t.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {t.desc}
        </p>
      </div>

      <div className="mt-12 rounded-2xl border bg-card p-8 md:p-12">
        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          {t.profileTitle}
        </h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-foreground">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
      </div>
    </div>
  );
}
