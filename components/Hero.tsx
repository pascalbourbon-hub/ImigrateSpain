import Link from "next/link";
import { translations, Lang } from "@/lib/translations";

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].home;
  const langParam = lang === "es" ? "?lang=es" : "";

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-3xl" />
      </div>

      {/* Spanish flag stripe accent */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-red-600 to-amber-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
              🇪🇸 {lang === "es" ? "Abogados de Inmigración en España" : "Immigration Lawyers in Spain"}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {t.heroTitle.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-amber-400">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`#services`}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-8 py-4 rounded-xl transition-colors text-center"
            >
              {t.heroCta}
            </Link>
            <Link
              href={`/contact${langParam}`}
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors text-center"
            >
              {t.heroSecondary}
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 mt-12 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {lang === "es" ? "Precios fijos, sin sorpresas" : "Fixed prices, no surprises"}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {lang === "es" ? "Abogados colegiados en España" : "Registered lawyers in Spain"}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {lang === "es" ? "Servicio en inglés y español" : "English & Spanish service"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
