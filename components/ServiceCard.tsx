import Link from "next/link";
import { Service } from "@/lib/services";
import { Lang } from "@/lib/translations";

interface ServiceCardProps {
  service: Service;
  lang: Lang;
}

export default function ServiceCard({ service, lang }: ServiceCardProps) {
  const name = lang === "es" ? service.nameES : service.nameEN;
  const description = lang === "es" ? service.descriptionES : service.descriptionEN;
  const langParam = lang === "es" ? "?lang=es" : "";

  return (
    <div className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">
        {name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
        {description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div>
          <span className="text-amber-400 font-bold text-2xl">€{service.price}</span>
          <span className="text-slate-500 text-sm ml-1">flat fee</span>
        </div>
        <Link
          href={`/services/${service.slug}${langParam}`}
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          {lang === "es" ? "Ver más →" : "Learn more →"}
        </Link>
      </div>
    </div>
  );
}
