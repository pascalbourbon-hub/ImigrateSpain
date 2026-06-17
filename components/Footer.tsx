import Link from "next/link";
import { translations, Lang } from "@/lib/translations";
import { services } from "@/lib/services";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const langParam = lang === "es" ? "?lang=es" : "";

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href={`/${langParam}`} className="flex items-center gap-2 mb-4">
              <span className="text-amber-400 text-2xl">⚖️</span>
              <span className="font-bold text-white text-xl">
                Immigration<span className="text-amber-400">Spain</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.services}</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}${langParam}`}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {lang === "es" ? s.nameES : s.nameEN}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/about${langParam}`} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={`/contact${langParam}`} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t.contact}
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t.terms}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-slate-400 text-sm">📍 Calle Serrano 41, 28001 Madrid</p>
              <p className="text-slate-400 text-sm mt-1">📞 +34 91 123 4567</p>
              <p className="text-slate-400 text-sm mt-1">✉️ info@immigrationspain.es</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} ImmigrationSpain. {t.rights}
          </p>
          <p className="text-slate-600 text-xs text-center sm:text-right max-w-md">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
