import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";
import { Lang } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Spain Immigration Blog — Visas, NIE & Nationality Guides",
  description:
    "Expert guides on Spanish immigration: the Digital Nomad Visa, NIE number, Spanish nationality by residency and more — written by ImmigrationSpain's specialist lawyers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Spain Immigration Blog | ImmigrationSpain",
    description:
      "Expert guides on Spanish immigration: the Digital Nomad Visa, NIE number, Spanish nationality by residency and more.",
    url: "https://imigrate-spain.vercel.app/blog",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ lang?: string }>;
}

function formatDate(iso: string, lang: Lang): string {
  return new Date(iso).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogContent({ lang }: { lang: Lang }) {
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
                  Blog
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
                {lang === "es"
                  ? "Guías de Inmigración en España"
                  : "Spain Immigration Guides"}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                {lang === "es"
                  ? "Consejos prácticos y guías detalladas sobre visados, NIE, residencia y nacionalidad española, escritas por nuestros abogados especialistas."
                  : "Practical advice and in-depth guides on visas, NIE, residency and Spanish nationality, written by our specialist immigration lawyers."}
              </p>
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const title = lang === "es" ? post.titleES : post.titleEN;
                const excerpt = lang === "es" ? post.excerptES : post.excerptEN;
                const category = lang === "es" ? post.categoryES : post.categoryEN;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}${langParam}`}
                    className="flex flex-col bg-slate-800 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
                        {category}
                      </span>
                    </div>
                    <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-amber-400 transition-colors">
                      {title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                      {excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-700 text-xs text-slate-500">
                      <time dateTime={post.dateISO}>{formatDate(post.dateISO, lang)}</time>
                      <span>·</span>
                      <span>
                        {post.readTimeMin} {lang === "es" ? "min de lectura" : "min read"}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-800 border-t border-slate-700 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {lang === "es" ? "¿Necesitas ayuda con tu trámite?" : "Need help with your case?"}
            </h2>
            <p className="text-slate-400 mb-8">
              {lang === "es"
                ? "Nuestros abogados pueden gestionar todo tu proceso de inmigración con precios fijos y transparentes."
                : "Our lawyers can handle your entire immigration process at transparent, fixed prices."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/services${langParam}`}
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl transition-colors"
              >
                {lang === "es" ? "Ver servicios" : "View Services"}
              </Link>
              <Link
                href={`/contact${langParam}`}
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3.5 rounded-xl border border-slate-600 transition-colors"
              >
                {lang === "es" ? "Contactar ahora" : "Contact Us Now"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const lang: Lang = params.lang === "es" ? "es" : "en";
  return (
    <Suspense>
      <BlogContent lang={lang} />
    </Suspense>
  );
}
