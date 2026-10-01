import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";
import { siteUrl, localePath } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";

type Entry = Omit<MetadataRoute.Sitemap[number], "url" | "alternates"> & { path: string };

// Every page exists in English (/path) and Spanish (/es/path); each URL lists both as hreflang alternates.
// Same form as the canonical tags: no trailing slash on the home page.
const absolute = (path: string) => (path === "/" ? siteUrl : `${siteUrl}${path}`);

function bilingual({ path, ...rest }: Entry): MetadataRoute.Sitemap {
  const languages = {
    en: absolute(path),
    es: absolute(localePath("es", path)),
  };
  return (["en", "es"] as Lang[]).map((lang) => ({
    url: absolute(localePath(lang, path)),
    alternates: { languages },
    ...rest,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: Entry[] = [
    { path: "/", lastModified, changeFrequency: "weekly", priority: 1 },
    { path: "/services", lastModified, changeFrequency: "weekly", priority: 0.9 },
    { path: "/about", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: new Date(post.dateISO),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return entries.flatMap(bilingual);
}
