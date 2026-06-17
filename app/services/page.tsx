import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { translations, Lang } from "@/lib/translations";

interface ServicesPageProps {
  searchParams: Promise<{ lang?: string }>;
}

function ServicesContent({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <div className="flex flex-col flex-1">
      <Navbar lang={lang} />
      <main className="flex-1">
        <section className="bg-slate-900 border-b border-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  {lang === "es" ? "Servicios de Inmigración" : "Immigration Services"}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
                {t.home.servicesTitle}
              </h1>
              <p className="text-slate-400 text-lg">{t.home.servicesSubtitle}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = await searchParams;
  const lang: Lang = params.lang === "es" ? "es" : "en";
  return (
    <Suspense>
      <ServicesContent lang={lang} />
    </Suspense>
  );
}
