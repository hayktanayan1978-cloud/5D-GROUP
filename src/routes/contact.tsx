import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/contact")({
  component: ContactComponent,
});

function ContactComponent() {
  const lang = useLang();
  const isRu = lang === "ru";

  const t = {
    badge: isRu ? "КОНТАКТЫ" : "CONTACT US",
    title: isRu ? "Свяжитесь с нами" : "Get in Touch",
    desc: isRu 
      ? "По вопросам дистрибуции, коммерческих поставок и B2B партнерства."
      : "For distribution inquiries, commercial supply agreements, and B2B partnership opportunities.",
    emailLabel: isRu ? "Эл. почта:" : "Email:",
    addressLabel: isRu ? "Адрес:" : "Address:",
    addressVal: isRu ? "Ереван, Армения / ЕАЭС" : "Yerevan, Armenia / EAEU",
    formTitle: isRu ? "Форма обратной связи" : "Partner Inquiry Form",
    namePlaceholder: isRu ? "Ваше имя" : "Your Name",
    emailPlaceholder: isRu ? "Ваш Email" : "Your Email",
    msgPlaceholder: isRu ? "Сообщение или детали запроса..." : "Message or inquiry details...",
    submitBtn: isRu ? "Отправить сообщение" : "Send Message"
  };

  return (
    <div className="section-shell py-12 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            {t.badge}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="grid size-10 place-items-center rounded-lg bg-teal/10 text-teal">
                <Mail className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">{t.emailLabel}</div>
                <a href="mailto:5dgrouppharma@gmail.com" className="text-sm font-bold text-[#005587] hover:underline">
                  5dgrouppharma@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid size-10 place-items-center rounded-lg bg-teal/10 text-teal">
                <MapPin className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">{t.addressLabel}</div>
                <div className="text-sm font-bold text-slate-800">{t.addressVal}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900">{t.formTitle}</h2>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="text" 
                placeholder={t.namePlaceholder} 
                className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-[#005587] focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder={t.emailPlaceholder} 
                className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-[#005587] focus:outline-none"
              />
            </div>
            <div>
              <textarea 
                rows={4} 
                placeholder={t.msgPlaceholder} 
                className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-[#005587] focus:outline-none"
              />
            </div>
            <button 
              type="submit" 
              className="w-full rounded-lg bg-[#005587] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#004066]"
            >
              {t.submitBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
