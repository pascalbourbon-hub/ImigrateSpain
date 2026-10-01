import type { Metadata } from "next";
import type { Lang } from "./translations";

export const siteUrl = "https://imigrate-spain.vercel.app";

/** Resolve the lang passed by proxy.ts (which rewrites /es/* to /*?lang=es). */
export function getLang(sp: { lang?: string }): Lang {
  return sp.lang === "es" ? "es" : "en";
}

/** "/services" -> "/es/services" for Spanish, unchanged for English. */
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

/** "/es/services" -> "/services". Accepts either form. */
export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  return pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
}

/** Canonical + hreflang links for a page available in both languages. */
export function localeAlternates(lang: Lang, path: string): Metadata["alternates"] {
  return {
    canonical: localePath(lang, path),
    languages: {
      en: path,
      es: localePath("es", path),
      "x-default": path,
    },
  };
}

export function ogLocale(lang: Lang) {
  return {
    locale: lang === "es" ? "es_ES" : "en_US",
    alternateLocale: lang === "es" ? "en_US" : "es_ES",
  };
}
