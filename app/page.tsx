import { Suspense } from "react";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { translations, Lang } from "@/lib/translations";

interface HomeProps {
  searchParams: Promise<{ lang?: string }>;
}

const stats = [
  { valueEN: "15,000+", valueES: "15.000+", labelKey: "statsClients" as const },
  { valueEN: "98%", valueES: "98%", labelKey: "statsSuccess" as const },
  { valueEN: "20+", valueES: "20+", labelKey: "statsLawyers" as const },
  { valueEN: "10+", valueES: "10+", labelKey: "statsYears" as const },
];

const testimonials = [
  {
    nameEN: "James Morrison",
    nameES: "James Morrison",
    roleEN: "American expat, Barcelona",
    roleES: "Expatriado americano, Barcelona",
    text: "ImmigrationSpain made getting my NIE completely painless. From payment to holding my certificate took less than 3 weeks. Worth every cent.",
    textES: "ImmigrationSpain hizo que obtener mi NIE fuera completamente indoloro. Desde el pago hasta tener mi certificado tardó menos de 3 semanas. Valió cada céntimo.",
    rating: 5,
    flag: "🇺🇸",
  },
  {
    nameEN: "Sarah Chen",
    nameES: "Sarah Chen",
    roleEN: "Digital nomad, Madrid",
    roleES: "Nómada digital, Madrid",
    text: "The Digital Nomad Visa process felt overwhelming until I found this team. They guided me through every document and even helped me set up as autónomo. Exceptional service.",
    textES: "El proceso de la Visa Nómada Digital me parecía abrumador hasta que encontré a este equipo. Me guiaron en cada documento e incluso me ayudaron a darme de alta como autónoma. Servicio excepcional.",
    rating: 5,
    flag: "🇬🇧",
  },
  {
    nameEN: "Carlos Mendoza",
    nameES: "Carlos Mendoza",
    roleEN: "Argentine professional, Valencia",
    roleES: "Profesional argentino, Valencia",
    text: "After years of living in Spain I finally applied for nationality with their help. The process was smooth and my lawyer was always available to answer my questions.",
    textES: "Después de años viviendo en España finalmente solicité la nacionalidad con su ayuda. El proceso fue fluido y mi abogado siempre estuvo disponible para responder mis preguntas.",
    rating: 5,
    flag: "🇦🇷",
  },
];

const faqs = [
  {
    qEN: "Do I need to be in Spain to use your services?",
    qES: "¿Necesito estar en España para usar sus servicios?",
    aEN: "Not necessarily. Many services can be started remotely. We'll advise you on whether a visit is required and help you plan it efficiently.",
    aES: "No necesariamente. Muchos servicios pueden iniciarse de forma remota. Te asesoraremos sobre si se requiere una visita y te ayudaremos a planificarla de manera eficiente.",
  },
  {
    qEN: "What happens after I pay?",
    qES: "¿Qué pasa después de pagar?",
    aEN: "Within 24 hours a dedicated lawyer will contact you, review your situation, and send you a personalised document checklist to start your case.",
    aES: "En 24 horas un abogado dedicado se pondrá en contacto contigo, revisará tu situación y te enviará una lista de documentos personalizada para iniciar tu caso.",
  },
  {
    qEN: "Are your prices all-inclusive?",
    qES: "¿Sus precios son todo incluido?",
    aEN: "Our fees cover all legal work and professional services. Government filing fees and third-party costs (apostilles, translations) are additional and will be communicated upfront.",
    aES: "Nuestros honorarios cubren todo el trabajo jurídico y servicios profesionales. Las tasas administrativas y costes de terceros (apostillas, traducciones) son adicionales y se comunicarán por adelantado.",
  },
  {
    qEN: "What languages do you work in?",
    qES: "¿En qué idiomas trabajan?",
    aEN: "We work in English and Spanish. Our team includes native English speakers who understand the needs of American, British, and international clients.",
    aES: "Trabajamos en inglés y español. Nuestro equipo incluye angloparlantes nativos que entienden las necesidades de los clientes americanos, británicos e internacionales.",
  },
  {
    qEN: "What if my application is rejected?",
    qES: "¿Qué pasa si mi solicitud es rechazada?",
    aEN: "We have a 98% success rate. In the rare case of a rejection, we analyze the reasons and file an appeal (recurso) at no extra charge.",
    aES: "Tenemos una tasa de éxito del 98%. En el raro caso de una denegación, analizamos los motivos y presentamos un recurso sin coste adicional.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-slate-700/50 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer bg-slate-800/50 hover:bg-slate-800 transition-colors list-none">
        <span className="text-white font-medium">{q}</span>
        <svg className="w-5 h-5 text-amber-400 flex-shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </summary>
      <div className="p-5 bg-slate-900/50 text-slate-400 leading-relaxed">
        {a}
      </div>
    </details>
  );
}

function HomeContent({ lang }: { lang: Lang }) {
  const t = translations[lang].home;
  const langParam = lang === "es" ? "?lang=es" : "";

  return (
    <div className="flex flex-col flex-1">
      <Navbar lang={lang} />

      <main className="flex-1">
        {/* Hero */}
        <Hero lang={lang} />

        {/* Stats */}
        <section className="bg-slate-800 border-y border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.labelKey} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">
                    {lang === "es" ? stat.valueES : stat.valueEN}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{t[stat.labelKey]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section id="services" className="bg-slate-900 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">{t.servicesTitle}</h2>
              <p className="text-slate-400 text-lg">{t.servicesSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-slate-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-14">
              {t.testimonialsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t_item, i) => (
                <div key={i} className="bg-slate-900 rounded-2xl p-6 border border-slate-700/50">
                  <StarRating count={t_item.rating} />
                  <p className="text-slate-300 mt-4 leading-relaxed text-sm">
                    &ldquo;{lang === "es" ? t_item.textES : t_item.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-800">
                    <div className="text-2xl">{t_item.flag}</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t_item.nameEN}</div>
                      <div className="text-slate-500 text-xs">
                        {lang === "es" ? t_item.roleES : t_item.roleEN}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-12">
              {t.faqTitle}
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  q={lang === "es" ? faq.qES : faq.qEN}
                  a={lang === "es" ? faq.aES : faq.aEN}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-amber-500 to-amber-600 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-slate-800 text-lg mb-10">{t.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`#services`}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                {t.ctaButton}
              </a>
              <a
                href={`/contact${langParam}`}
                className="bg-white/20 hover:bg-white/30 text-slate-900 font-semibold px-8 py-4 rounded-xl border border-slate-900/20 transition-colors"
              >
                {lang === "es" ? "Hablar con un abogado" : "Talk to a Lawyer"}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang: Lang = params.lang === "es" ? "es" : "en";
  return (
    <Suspense>
      <HomeContent lang={lang} />
    </Suspense>
  );
}
