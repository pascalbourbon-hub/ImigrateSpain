"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { translations, Lang } from "@/lib/translations";

function ContactForm({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would POST to a backend/email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-900/30 border border-green-700 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-white font-bold text-xl mb-2">{t.successMessage}</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5">{t.nameLabel} *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm"
            placeholder={lang === "es" ? "Tu nombre completo" : "Your full name"}
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5">{t.emailLabel} *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5">{t.phoneLabel}</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5">{t.serviceLabel}</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm"
          >
            <option value="">{t.selectService}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {lang === "es" ? s.nameES : s.nameEN} — €{s.price}
              </option>
            ))}
            <option value="other">{lang === "es" ? "Otro / No estoy seguro" : "Other / Not sure yet"}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-slate-300 text-sm font-medium mb-1.5">{t.messageLabel} *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors text-sm resize-none"
          placeholder={
            lang === "es"
              ? "Cuéntanos tu situación y en qué podemos ayudarte..."
              : "Tell us about your situation and how we can help..."
          }
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-6 py-3.5 rounded-xl transition-colors"
      >
        {t.submitButton}
      </button>

      <p className="text-slate-500 text-xs text-center">
        {lang === "es"
          ? "Al enviar este formulario aceptas nuestra política de privacidad."
          : "By submitting this form you agree to our privacy policy."}
      </p>
    </form>
  );
}

function ContactContent({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const langParam = lang === "es" ? "?lang=es" : "";

  return (
    <div className="flex flex-col flex-1">
      <Navbar lang={lang} />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-slate-900 border-b border-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  {lang === "es" ? "Contacto" : "Contact"}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">{t.title}</h1>
              <p className="text-slate-400 text-lg">{t.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Contact form + info */}
        <section className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6 lg:p-8">
                  <h2 className="text-xl font-bold text-white mb-6">
                    {lang === "es" ? "Envíanos un mensaje" : "Send us a message"}
                  </h2>
                  <ContactForm lang={lang} />
                </div>
              </div>

              {/* Info sidebar */}
              <div className="space-y-6">
                {/* Office info */}
                <div className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-4">{t.officeTitle}</h3>
                  <div className="space-y-3 text-sm text-slate-400">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-0.5">📍</span>
                      <div>
                        <div className="text-white font-medium">Madrid (HQ)</div>
                        <div>Calle Serrano 41, 4ª planta</div>
                        <div>28001 Madrid, España</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 mt-0.5">📍</span>
                      <div>
                        <div className="text-white font-medium">Barcelona</div>
                        <div>Passeig de Gràcia 55, 2ª</div>
                        <div>08007 Barcelona, España</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-slate-700">
                      <span className="text-amber-400">📞</span>
                      <span>+34 91 123 4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">✉️</span>
                      <span>info@immigrationspain.es</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400">🕐</span>
                      <span>{t.officeHours}</span>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-4">
                    {lang === "es" ? "Qué esperar" : "What to Expect"}
                  </h3>
                  <ol className="space-y-3">
                    {[
                      lang === "es" ? "Recibimos tu mensaje" : "We receive your message",
                      lang === "es" ? "Un abogado lo revisa en 24h" : "A lawyer reviews it in 24h",
                      lang === "es" ? "Te enviamos una propuesta personalizada" : "We send you a tailored proposal",
                      lang === "es" ? "Iniciamos tu caso al instante" : "We start your case immediately",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="w-5 h-5 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

function ContactWrapper() {
  const searchParams = useSearchParams();
  const lang: Lang = searchParams.get("lang") === "es" ? "es" : "en";
  return <ContactContent lang={lang} />;
}

export default function ContactClient() {
  return (
    <Suspense>
      <ContactWrapper />
    </Suspense>
  );
}
