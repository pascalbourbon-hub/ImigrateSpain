import { services } from "@/lib/services";
import { posts } from "@/lib/posts";
import { lawyers, getLawyerById } from "@/lib/lawyers";
import { siteUrl } from "@/lib/i18n";

// /llms.txt — a plain-Markdown summary of the site for AI assistants (https://llmstxt.org).
// Generated from the same data as the pages so prices and links never drift.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# ImmigrationSpain",
    "",
    "> Immigration and foreign nationals lawyers (Derecho de Extranjería) in Spain. Fixed-price services for NIE, work permits, residence permits, the Digital Nomad Visa and Spanish nationality, delivered in English and Spanish. Every page is available in English (/) and Spanish (/es/).",
    "",
    "## Services (fixed fees, EUR, government fees not included)",
    "",
    ...services.map(
      (s) =>
        `- [${s.nameEN}](${siteUrl}/services/${s.slug}): €${s.price}, typical duration ${s.duration}. ${s.descriptionEN} Spanish: [${s.nameES}](${siteUrl}/es/services/${s.slug})`
    ),
    "",
    "## Guides",
    "",
    ...posts.map((p) => {
      const author = getLawyerById(p.authorId);
      return `- [${p.titleEN}](${siteUrl}/blog/${p.slug})${author ? ` by ${author.name}` : ""}: ${p.excerptEN} Spanish: [${p.titleES}](${siteUrl}/es/blog/${p.slug})`;
    }),
    "",
    "## Team",
    "",
    ...lawyers.map(
      (l) => `- [${l.name}](${siteUrl}/about#${l.id}): ${l.roleEN}. Focus: ${l.specialtyEN}. Languages: ${l.languages}.`
    ),
    "",
    "## Contact",
    "",
    `- [Contact form](${siteUrl}/contact): replies within 24 hours.`,
    `- [Services overview](${siteUrl}/services)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
