import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyButton from "@/components/BuyButton";
import JsonLd from "@/components/JsonLd";
import { getServiceBySlug, services } from "@/lib/services";
import { translations, Lang } from "@/lib/translations";

const siteUrl = "https://imigrate-spain.vercel.app";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string; success?: string; cancelled?: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const sp = await searchParams;
  const lang: Lang = sp.lang === "es" ? "es" : "en";
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const name = lang === "es" ? service.nameES : service.nameEN;
  const description = lang === "es" ? service.descriptionES : service.descriptionEN;
  const title = `${name} in Spain — €${service.price} Fixed Fee | Lawyers`;
  const canonical = `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: `${name} | ImmigrationSpain`,
      description,
      url: `${siteUrl}${canonical}`,
      locale: lang === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | ImmigrationSpain`,
      description,
    },
  };
}

function ServiceContent({
  lang,
  slug,
  success,
  cancelled,
}: {
  lang: Lang;
  slug: string;
  success: boolean;
  cancelled: boolean;
}) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const t = translations[lang].service;
  const langParam = lang === "es" ? "?lang=es" : "";
  const name = lang === "es" ? service.nameES : service.nameEN;
  const description = lang === "es" ? service.descriptionES : service.descriptionEN;
  const longDescription = lang === "es" ? service.longDescriptionES : service.longDescriptionEN;
  const features = lang === "es" ? service.featuresES : service.featuresEN;

  const processSteps = [
    { title: t.step1, desc: t.step1desc, icon: "💳" },
    { title: t.step2, desc: t.step2desc, icon: "📋" },
    { title: t.step3, desc: t.step3desc, icon: "📤" },
    { title: t.step4, desc: t.step4desc, icon: "✅" },
  ];

  return (
    <div className="flex flex-col flex-1">
      <Navbar lang={lang} />

      <main className="flex-1">
        {/* Success / Cancelled banners */}
        {success && (
          <div className="bg-green-900/80 border-b border-green-700 text-green-300 text-center py-3 px-4 text-sm font-medium">
            {lang === "es"
              ? "¡Pago realizado con éxito! Nuestro equipo se pondrá en contacto contigo en 24 horas."
              : "Payment successful! Our team will contact you within 24 hours."}
          </div>
        )}
        {cancelled && (
          <div className="bg-red-900/80 border-b border-red-800 text-red-300 text-center py-3 px-4 text-sm font-medium">
            {lang === "es"
              ? "Pago cancelado. No se ha realizado ningún cargo."
              : "Payment cancelled. You have not been charged."}
          </div>
        )}

        {/* Header */}
        <section className="bg-slate-900 border-b border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/services${langParam}`}
              className="inline-flex items-center text-slate-400 hover:text-amber-400 text-sm font-medium transition-colors mb-8"
            >
              {t.backToServices}
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">{name}</h1>
                <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-slate-500 text-sm">⏱ {t.duration}:</span>
                  <span className="text-amber-400 font-semibold text-sm">{service.duration}</span>
                </div>
              </div>

              {/* Purchase card */}
              <div className="lg:flex-shrink-0 bg-slate-800 border border-slate-700 rounded-2xl p-6 lg:w-80">
                <div className="text-center mb-6">
                  <div className="text-amber-400 font-extrabold text-5xl">€{service.price}</div>
                  <div className="text-slate-400 text-sm mt-1">
                    {lang === "es" ? "precio fijo, todo incluido" : "flat fee, all-inclusive"}
                  </div>
                </div>
                <BuyButton slug={service.slug} lang={lang} price={service.price} />
                <p className="text-slate-500 text-xs text-center mt-4">
                  {lang === "es"
                    ? "Pago seguro con tarjeta. Te contactamos en 24h."
                    : "Secure card payment. We contact you within 24h."}
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="text-slate-600 text-xs">
                    {lang === "es" ? "Pago seguro con" : "Secure payment by"}
                  </span>
                  <span className="text-slate-400 font-bold text-xs tracking-wider">STRIPE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Description */}
              <div className="lg:col-span-2">
                <div className="prose prose-invert max-w-none">
                  {longDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-slate-300 leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Process steps */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-8">{t.processTitle}</h2>
                  <div className="space-y-5">
                    {processSteps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-lg">
                          {step.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                              {lang === "es" ? `Paso ${i + 1}` : `Step ${i + 1}`}
                            </span>
                          </div>
                          <h3 className="text-white font-semibold">{step.title}</h3>
                          <p className="text-slate-400 text-sm mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features sidebar */}
              <div>
                <div className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6 sticky top-24">
                  <h3 className="text-white font-bold text-lg mb-5">{t.includes}</h3>
                  <ul className="space-y-3">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <BuyButton slug={service.slug} lang={lang} price={service.price} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-slate-800 py-16 border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">
              {lang === "es" ? "Otros servicios" : "Other Services"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {services
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}${langParam}`}
                    className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50 hover:border-amber-500/50 rounded-xl px-4 py-3 transition-colors group"
                  >
                    <span>{s.icon}</span>
                    <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                      {lang === "es" ? s.nameES : s.nameEN}
                    </span>
                    <span className="text-amber-400 font-bold text-sm">€{s.price}</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  const { slug } = await params;
  const sp = await searchParams;
  const lang: Lang = sp.lang === "es" ? "es" : "en";
  const success = sp.success === "true";
  const cancelled = sp.cancelled === "true";

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const name = lang === "es" ? service.nameES : service.nameEN;
  const description = lang === "es" ? service.descriptionES : service.descriptionEN;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: service.nameEN,
    url: `${siteUrl}/services/${service.slug}`,
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    provider: {
      "@type": "LegalService",
      name: "ImmigrationSpain",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: service.price,
      url: `${siteUrl}/services/${service.slug}`,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Suspense>
      <JsonLd data={serviceSchema} />
      <ServiceContent lang={lang} slug={slug} success={success} cancelled={cancelled} />
    </Suspense>
  );
}
