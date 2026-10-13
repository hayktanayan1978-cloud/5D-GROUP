import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, ShieldCheck, FileText, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/eaeu-distribution")({
  component: EAEUDistributionComponent,
});

function EAEUDistributionComponent() {
  const lang = useLang();
  const isRu = lang === "ru";

  const t = {
    badge: isRu ? "ДИСТРИБУЦИЯ В ЕАЭС" : "EAEU DISTRIBUTION",
    title: isRu ? "Эффективная логистика и регулирование в ЕАЭС" : "Streamlined EAEU Logistics & Regulatory Access",
    desc: isRu 
      ? "5D Group обеспечивает полный цикл импорта, госрегистрации (СГР) и дистрибуции БАД на территории Армении, России, Беларуси, Казахстана и Киргизии."
      : "5D Group provides complete import, state registration (SGR), and distribution services across Armenia, Russia, Belarus, Kazakhstan, and Kyrgyzstan.",
    btn: isRu ? "Обсудить сотрудничество" : "Discuss Partnership",
    cards: [
      {
        icon: FileText,
        title: isRu ? "Регистрация (СГР)" : "Regulatory Support",
        desc: isRu ? "Подготовка досье и получение Свидетельств о государственной регистрации." : "Full dossier preparation and State Registration Certificate issuance."
      },
      {
        icon: Truck,
        title: isRu ? "Логистика и Таможня" : "Logistics & Customs",
        desc: isRu ? "Транспортировка, таможенное оформление и складское хранение." : "Seamless transport, customs clearance, and temperature-controlled storage."
      },
      {
        icon: Network,
        title: isRu ? "Сеть Дистрибуции" : "Distribution Network",
        desc: isRu ? "Прямой доступ к аптечным сетям и фармацевтическим дистрибьюторам." : "Direct access to pharmacy chains and major regional distributors."
      },
      {
        icon: ShieldCheck,
        title: isRu ? "Контроль Качества" : "Compliance & Standards",
        desc: isRu ? "Полное соответствие техническим регламентам ЕАЭС (ТР ТС 021/2011)." : "Full compliance with EAEU Technical Regulations and quality standards."
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
