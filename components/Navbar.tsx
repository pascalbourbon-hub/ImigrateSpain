"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { translations, Lang } from "@/lib/translations";

interface NavbarProps {
  lang: Lang;
}

export default function Navbar({ lang }: NavbarProps) {
  const t = translations[lang].nav;
  const langT = translations[lang].lang;
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function getLangHref(targetLang: Lang) {
    const params = new URLSearchParams(searchParams.toString());
    if (targetLang === "en") {
      params.delete("lang");
    } else {
      params.set("lang", targetLang);
    }
    const qs = params.toString();
    return `${pathname}${qs ? `?${qs}` : ""}`;
  }

  function navLink(href: string, label: string) {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    const langParam = lang === "es" ? "?lang=es" : "";
    return (
      <Link
        href={`${href}${langParam}`}
        className={`text-sm font-medium transition-colors hover:text-amber-400 ${
          isActive ? "text-amber-400" : "text-slate-300"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={lang === "es" ? "/?lang=es" : "/"} className="flex items-center gap-2 flex-shrink-0">
            <span className="text-amber-400 text-2xl">⚖️</span>
            <span className="font-bold text-white text-lg leading-tight">
              Immigration<span className="text-amber-400">Spain</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLink("/", t.home)}
            {navLink("/services", t.services)}
            {navLink("/about", t.about)}
            {navLink("/blog", t.blog)}
            {navLink("/contact", t.contact)}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <Link
              href={getLangHref(lang === "en" ? "es" : "en")}
              className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 rounded px-2.5 py-1 transition-colors"
            >
              {langT.switch}
            </Link>
            <Link
              href={lang === "es" ? "/contact?lang=es" : "/contact"}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
            >
              {t.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href={getLangHref(lang === "en" ? "es" : "en")}
              className="text-xs font-semibold uppercase text-slate-400 border border-slate-700 rounded px-2 py-1"
            >
              {langT.switch}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pb-4 pt-2 space-y-3">
          {navLink("/", t.home)}
          {navLink("/services", t.services)}
          {navLink("/about", t.about)}
          {navLink("/blog", t.blog)}
          {navLink("/contact", t.contact)}
          <Link
            href={lang === "es" ? "/contact?lang=es" : "/contact"}
            className="block mt-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-lg text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t.cta}
          </Link>
        </div>
      )}
    </nav>
  );
}
