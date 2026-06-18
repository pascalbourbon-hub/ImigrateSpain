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
    name: "Alejandro Esquerra Castellet",
    roleEN: "Senior Immigration Lawyer",
    roleES: "Abogado Principal de Inmigración",
    bioEN: "Alejandro has over 11 years of experience in Spanish immigration and foreign nationals law (Derecho de Extranjería). A graduate of Universitat Pompeu Fabra, he has guided hundreds of international clients through complex visa, residency, and work permit procedures.",
    bioES: "Alejandro cuenta con más de 11 años de experiencia en derecho de extranjería e inmigración española. Licenciado por la Universitat Pompeu Fabra, ha guiado a cientos de clientes internacionales a través de complejos procedimientos de visado, residencia y permiso de trabajo.",
    specialtyEN: "Immigration & Foreign Nationals Law",
    specialtyES: "Derecho de Extranjería e Inmigración",
    languages: "Spanish, Catalan, English",
    emoji: "👨‍⚖️",
  },
  {
    name: "Marina Cortasa Cachero",
    roleEN: "Immigration & Human Rights Lawyer",
    roleES: "Abogada de Inmigración y Derechos Humanos",
    bioEN: "Marina holds a Law degree from UIC Barcelona and a Master's in Effective Judicial Protection. Her background in international law, fundamental rights, and human rights within UN systems gives her clients a uniquely thorough legal perspective.",
    bioES: "Marina es licenciada en Derecho por la UIC Barcelona y tiene un Máster en Tutela Judicial Efectiva. Su formación en derecho internacional, derechos fundamentales y protección de los derechos humanos en el sistema de la ONU ofrece a sus clientes una perspectiva jurídica excepcionalmente completa.",
    specialtyEN: "Residency, Nationality & Human Rights",
    specialtyES: "Residencia, Nacionalidad y Derechos Humanos",
    languages: "Spanish, Catalan, English",
    emoji: "👩‍⚖️",
  },
  {
    name: "Martina Albero Pes",
    roleEN: "Immigration & International Law Specialist",
    roleES: "Especialista en Inmigración y Derecho Internacional",
    bioEN: "Martina holds a Law degree from the Autonomous University of Barcelona with further specialisation in European and public international law at Université Toulouse Capitole. She advises international professionals on residence permits and Digital Nomad visas, combining rigorous legal training with a French-speaking capability that serves clients across Europe.",
    bioES: "Martina es licenciada en Derecho por la Universidad Autónoma de Barcelona, con especialización adicional en derecho europeo e internacional público en la Université Toulouse Capitole. Asesora a profesionales internacionales en permisos de residencia y visados de nómada digital, combinando una rigurosa formación jurídica con el dominio del francés para atender a clientes en toda Europa.",
    specialtyEN: "Residence Permits & Digital Nomad Visa",
    specialtyES: "Permisos de Residencia y Visa Nómada Digital",
    languages: "Spanish, Catalan, French, English",
    emoji: "👩‍⚖️",
  },
  {
    name: "Claudia Gibernau Garcia",
    roleEN: "Work Permit & NIE Specialist",
    roleES: "Especialista en Permisos de Trabajo y NIE",
    bioEN: "Claudia focuses on work authorisations and NIE procedures for foreign nationals relocating to Spain. She is known for her clear communication with English-speaking clients and her efficiency in managing complex administrative cases.",
    bioES: "Claudia se enfoca en autorizaciones de trabajo y procedimientos de NIE para extranjeros que se trasladan a España. Es conocida por su clara comunicación con clientes anglófonos y su eficiencia en la gestión de casos administrativos complejos.",
    specialtyEN: "Work Permits & NIE",
    specialtyES: "Permisos de Trabajo y NIE",
    languages: "Spanish, Catalan, English",
    emoji: "👩‍⚖️",
  },
  {
    name: "Greta Berger",
    roleEN: "International Client Specialist",
    roleES: "Especialista en Clientes Internacionales",
    bioEN: "Greta brings a strong academic foundation in law from Universitat Pompeu Fabra and a natural ability to connect with clients from diverse cultural backgrounds. She supports international clients — particularly from northern Europe and the Americas — through every step of their immigration journey.",
    bioES: "Greta aporta una sólida formación académica en derecho por la Universitat Pompeu Fabra y una capacidad natural para conectar con clientes de diversos orígenes culturales. Acompaña a clientes internacionales —especialmente del norte de Europa y las Américas— en cada etapa de su proceso migratorio.",
    specialtyEN: "International Client Support & NIE",
    specialtyES: "Atención a Clientes Internacionales y NIE",
    languages: "Spanish, English, German",
    emoji: "👩‍⚖️",
  },
  {
    name: "Cristina Cirillo",
    roleEN: "Global Mobility & Immigration Lawyer",
    roleES: "Abogada de Movilidad Global e Inmigración",
    bioEN: "A licensed attorney with the Barcelona Bar Association, Cristina specialises in global mobility and immigration — covering migration, labour, tax, and international social security matters. Fluent in Italian, she is the go-to expert for Italy's growing expat community in Spain and for international talent relocating across borders.",
    bioES: "Colegiada en el Ilustre Colegio de la Abogacía de Barcelona, Cristina está especializada en movilidad global e inmigración, abarcando cuestiones de migración, derecho laboral, fiscalidad y seguridad social internacional. Con dominio del italiano, es la experta de referencia para la creciente comunidad de expatriados italianos en España y para el talento internacional que se traslada entre países.",
    specialtyEN: "Global Mobility & International Relocation",
    specialtyES: "Movilidad Global y Reubicación Internacional",
    languages: "Spanish, Italian, English",
    emoji: "👩‍⚖️",
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
                    <div className="text-slate-500 text-sm mt-1">{lang === "es" ? "satisfacción" : "satisfaction"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-extrabold text-3xl">20+</div>
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
