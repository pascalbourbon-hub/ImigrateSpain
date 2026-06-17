import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { translations, Lang } from "@/lib/translations";
import Link from "next/link";

interface AboutPageProps {
  searchParams: Promise<{ lang?: string }>;
}

const lawyers = [
  {
    name: "Elena Martínez",
    roleEN: "Senior Immigration Lawyer",
    roleES: "Abogada Principal de Inmigración",
    bioEN: "Elena has 15 years of experience in Spanish immigration law with a special focus on Digital Nomad and investment visas. Former legal advisor to the Spanish Bar Association.",
    bioES: "Elena cuenta con 15 años de experiencia en derecho de inmigración español con especial enfoque en visados de nómada digital e inversión. Ex asesora jurídica del Colegio de Abogados.",
    specialtyEN: "Digital Nomad & Investment Visas",
    specialtyES: "Visados de Nómada Digital e Inversión",
    languages: "English, Spanish, French",
    emoji: "👩‍⚖️",
  },
  {
    name: "David Fernández",
    roleEN: "Work Permit Specialist",
    roleES: "Especialista en Permisos de Trabajo",
    bioEN: "David specializes in work permits and labour law for multinational companies. He has successfully obtained over 800 work authorizations for clients from 40+ countries.",
    bioES: "David está especializado en permisos de trabajo y derecho laboral para empresas multinacionales. Ha obtenido con éxito más de 800 autorizaciones de trabajo para clientes de más de 40 países.",
    specialtyEN: "Work Permits & Labour Law",
    specialtyES: "Permisos de Trabajo y Derecho Laboral",
    languages: "English, Spanish, German",
    emoji: "👨‍⚖️",
  },
  {
    name: "Sofía Reyes",
    roleEN: "Nationality & Residency Lawyer",
    roleES: "Abogada de Nacionalidad y Residencia",
    bioEN: "Sofía is an expert in Spanish nationality procedures including Ibero-American routes and Sephardic Jewish heritage claims. She has helped over 600 families achieve citizenship.",
    bioES: "Sofía es experta en procedimientos de nacionalidad española incluyendo las vías iberoamericanas y reclamaciones de herencia judía sefardí. Ha ayudado a más de 600 familias a conseguir la ciudadanía.",
    specialtyEN: "Nationality & Long-term Residency",
    specialtyES: "Nacionalidad y Residencia de Larga Duración",
    languages: "English, Spanish, Arabic",
    emoji: "👩‍⚖️",
  },
  {
    name: "Michael O'Brien",
    roleEN: "Expat & NIE Specialist",
    roleES: "Especialista en NIE y Expatriados",
    bioEN: "Originally from Dublin, Michael joined the team to bridge the gap for English-speaking clients navigating Spanish bureaucracy. He handles NIE, TIE, and Padron applications.",
    bioES: "Originario de Dublín, Michael se unió al equipo para ayudar a los clientes anglófonos a navegar por la burocracia española. Gestiona solicitudes de NIE, TIE y empadronamiento.",
    specialtyEN: "NIE, TIE & Expat Services",
    specialtyES: "NIE, TIE y Servicios para Expatriados",
    languages: "English, Spanish, Irish",
    emoji: "👨‍⚖️",
  },
  {
    name: "Isabella Rossi",
    roleEN: "Family & Student Visa Lawyer",
    roleES: "Abogada de Visados de Familia y Estudios",
    bioEN: "Isabella handles family reunification cases and student visas with exceptional attention to detail. She is also fluent in Italian and serves Italy's large expat community in Spain.",
    bioES: "Isabella gestiona casos de reagrupación familiar y visados de estudios con una atención al detalle excepcional. También habla italiano y sirve a la gran comunidad de expatriados italianos en España.",
    specialtyEN: "Family Reunification & Student Visas",
    specialtyES: "Reagrupación Familiar y Visados de Estudios",
    languages: "English, Spanish, Italian",
    emoji: "👩‍⚖️",
  },
  {
    name: "Ahmed Al-Rashid",
    roleEN: "Middle East & North Africa Specialist",
    roleES: "Especialista en Oriente Medio y Norte de África",
    bioEN: "Ahmed provides dedicated support to clients from MENA countries, navigating the specific documentation requirements and bilateral agreements between Spain and the Arab world.",
    bioES: "Ahmed presta un apoyo dedicado a los clientes de los países MENA, navegando los requisitos documentales específicos y los acuerdos bilaterales entre España y el mundo árabe.",
    specialtyEN: "MENA & Investment Visas",
    specialtyES: "Visados MENA e Inversión",
    languages: "English, Spanish, Arabic, French",
    emoji: "👨‍⚖️",
  },
];

const values = [
  {
    icon: "⚖️",
    titleEN: "Transparency",
    titleES: "Transparencia",
    descEN: "Fixed, published prices. No hidden fees. No surprises.",
    descES: "Precios fijos y publicados. Sin costes ocultos. Sin sorpresas.",
  },
  {
    icon: "🎯",
    titleEN: "Expertise",
    titleES: "Experiencia",
    descEN: "Our lawyers specialise exclusively in Spanish immigration law.",
    descES: "Nuestros abogados se especializan exclusivamente en derecho de inmigración español.",
  },
  {
    icon: "🌍",
    titleEN: "International",
    titleES: "Internacional",
    descEN: "We serve clients from over 80 nationalities in English and Spanish.",
    descES: "Atendemos clientes de más de 80 nacionalidades en inglés y español.",
  },
  {
    icon: "🤝",
    titleEN: "Dedication",
    titleES: "Dedicación",
    descEN: "A dedicated lawyer handles every case from start to finish.",
    descES: "Un abogado dedicado gestiona cada caso de principio a fin.",
  },
];

function AboutContent({ lang }: { lang: Lang }) {
  const t = translations[lang].about;
  const langParam = lang === "es" ? "?lang=es" : "";

  return (
    <div className="flex flex-col flex-1">
      <Navbar lang={lang} />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-slate-900 border-b border-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  {lang === "es" ? "Nuestro equipo" : "Our Team"}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">{t.title}</h1>
              <p className="text-slate-400 text-lg leading-relaxed">{t.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-slate-800 border-b border-slate-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">{t.missionTitle}</h2>
                <p className="text-slate-400 text-lg leading-relaxed">{t.missionText}</p>
                <div className="flex gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-amber-400 font-extrabold text-3xl">15,000+</div>
                    <div className="text-slate-500 text-sm mt-1">{lang === "es" ? "clientes" : "clients"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-extrabold text-3xl">98%</div>
                    <div className="text-slate-500 text-sm mt-1">{lang === "es" ? "éxito" : "success"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-extrabold text-3xl">10+</div>
                    <div className="text-slate-500 text-sm mt-1">{lang === "es" ? "años" : "years"}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="bg-slate-900 rounded-xl p-5 border border-slate-700/50">
                    <div className="text-2xl mb-2">{v.icon}</div>
                    <div className="text-white font-semibold text-sm mb-1">
                      {lang === "es" ? v.titleES : v.titleEN}
                    </div>
                    <div className="text-slate-400 text-xs leading-relaxed">
                      {lang === "es" ? v.descES : v.descEN}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-10">
              {lang === "es" ? "Conoce a los Abogados" : "Meet the Lawyers"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lawyers.map((lawyer, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-3xl">
                      {lawyer.emoji}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{lawyer.name}</h3>
                      <div className="text-amber-400 text-sm">
                        {lang === "es" ? lawyer.roleES : lawyer.roleEN}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {lang === "es" ? lawyer.bioES : lawyer.bioEN}
                  </p>
                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="text-amber-500">⚡</span>
                      <span>{lang === "es" ? lawyer.specialtyES : lawyer.specialtyEN}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>🗣</span>
                      <span>{lawyer.languages}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-800 border-t border-slate-700 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {lang === "es" ? "¿Listo para comenzar?" : "Ready to get started?"}
            </h2>
            <p className="text-slate-400 mb-8">
              {lang === "es"
                ? "Reserva una consulta gratuita con uno de nuestros abogados."
                : "Book a free consultation with one of our lawyers."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/contact${langParam}`}
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
              >
                {lang === "es" ? "Contactar ahora" : "Contact Us Now"}
              </Link>
              <Link
                href={`/services${langParam}`}
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3.5 rounded-xl border border-slate-600 transition-colors"
              >
                {lang === "es" ? "Ver servicios" : "View Services"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const params = await searchParams;
  const lang: Lang = params.lang === "es" ? "es" : "en";
  return (
    <Suspense>
      <AboutContent lang={lang} />
    </Suspense>
  );
}
