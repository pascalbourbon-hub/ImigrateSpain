import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { getLang, localeAlternates, localePath, ogLocale } from "@/lib/i18n";

const meta = {
  en: {
    title: "Contact Our Immigration Lawyers in Spain",
    description:
      "Get in touch with ImmigrationSpain. Ask our specialist immigration lawyers about NIE, work permits, residence, the Digital Nomad Visa or Spanish nationality — we respond within 24 hours.",
  },
  es: {
    title: "Contacta con Nuestros Abogados de Extranjería",
    description:
      "Habla con ImmigrationSpain. Consulta a nuestros abogados sobre NIE, permisos de trabajo, residencia, visado de nómada digital o nacionalidad española. Respondemos en 24 horas.",
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const lang = getLang(await searchParams);
  const { title, description } = meta[lang];
  return {
    title,
    description,
    alternates: localeAlternates(lang, "/contact"),
    openGraph: {
      type: "website",
      title: `${title} | ImmigrationSpain`,
      description,
      url: localePath(lang, "/contact"),
      ...ogLocale(lang),
    },
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const lang = getLang(await searchParams);
  return <ContactClient lang={lang} />;
}
