import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getPostBySlug, posts, ContentBlock } from "@/lib/posts";
import { getServiceBySlug } from "@/lib/services";
import { Lang } from "@/lib/translations";

const siteUrl = "https://imigrate-spain.vercel.app";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sp = await searchParams;
  const lang: Lang = sp.lang === "es" ? "es" : "en";
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const title = lang === "es" ? post.titleES : post.titleEN;
  const description = lang === "es" ? post.excerptES : post.excerptEN;
  const canonical = `/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: `${title} | ImmigrationSpain`,
      description,
      url: `${siteUrl}${canonical}`,
      locale: lang === "es" ? "es_ES" : "en_US",
      publishedTime: post.dateISO,
      authors: ["ImmigrationSpain"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ImmigrationSpain`,
      description,
    },
  };
}

function formatDate(iso: string, lang: Lang): string {
  return new Date(iso).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="max-w-none">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-3 mb-6">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-slate-300 leading-relaxed text-lg mb-6">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

function BlogPostContent({ lang, slug }: { lang: Lang; slug: string }) {
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const langParam = lang === "es" ? "?lang=es" : "";
  const title = lang === "es" ? post.titleES : post.titleEN;
  const category = lang === "es" ? post.categoryES : post.categoryEN;
  const body = lang === "es" ? post.bodyES : post.bodyEN;

  const service = getServiceBySlug(post.serviceSlug);
  const serviceName = service
    ? lang === "es"
      ? service.nameES
      : service.nameEN
    : "";

  return (
    <div className="flex flex-col flex-1">
      <Navbar lang={lang} />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-slate-900 border-b border-slate-800 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog${langParam}`}
              className="inline-flex items-center text-slate-400 hover:text-amber-400 text-sm font-medium transition-colors mb-8"
            >
              {lang === "es" ? "← Volver al blog" : "← Back to Blog"}
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
                {category}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              {title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span>ImmigrationSpain</span>
              <span>·</span>
              <time dateTime={post.dateISO}>{formatDate(post.dateISO, lang)}</time>
              <span>·</span>
              <span>
                {post.readTimeMin} {lang === "es" ? "min de lectura" : "min read"}
              </span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="bg-slate-900 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ArticleBody blocks={body} />

            {/* Service CTA */}
            {service && (
              <div className="mt-12 bg-slate-800 border border-amber-500/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-white font-bold text-xl mb-2">
                      {lang === "es"
                        ? `¿Listo para tu ${serviceName}?`
                        : `Ready for your ${serviceName}?`}
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-5">
                      {lang === "es"
                        ? "Deja que nuestros abogados especialistas se encarguen de todo el proceso por un precio fijo y transparente."
                        : "Let our specialist lawyers handle the entire process for you at a transparent, fixed price."}
                    </p>
                    <Link
                      href={`/services/${service.slug}${langParam}`}
                      className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                      {lang === "es"
                        ? `Ver servicio — €${service.price}`
                        : `View Service — €${service.price}`}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* More articles */}
        <section className="bg-slate-800 py-16 border-t border-slate-700">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">
              {lang === "es" ? "Más artículos" : "More Articles"}
            </h2>
            <div className="flex flex-col gap-3">
              {posts
                .filter((p) => p.slug !== slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}${langParam}`}
                    className="flex items-center justify-between gap-4 bg-slate-700/40 hover:bg-slate-700 border border-slate-600/50 hover:border-amber-500/40 rounded-xl px-5 py-4 transition-colors group"
                  >
                    <span className="text-slate-300 group-hover:text-white text-sm font-medium">
                      {lang === "es" ? p.titleES : p.titleEN}
                    </span>
                    <span className="text-amber-400 flex-shrink-0">→</span>
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

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = await params;
  const sp = await searchParams;
  const lang: Lang = sp.lang === "es" ? "es" : "en";

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const title = lang === "es" ? post.titleES : post.titleEN;
  const description = lang === "es" ? post.excerptES : post.excerptEN;
  const canonical = `${siteUrl}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    inLanguage: lang === "es" ? "es-ES" : "en-US",
    author: {
      "@type": "Organization",
      name: "ImmigrationSpain",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "ImmigrationSpain",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    url: canonical,
  };

  return (
    <Suspense>
      <JsonLd data={articleSchema} />
      <BlogPostContent lang={lang} slug={slug} />
    </Suspense>
  );
}
