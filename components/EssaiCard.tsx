import Link from "next/link";
import { EssaiMeta, formatDate } from "@/lib/essais";

export default function EssaiCard({ essai }: { essai: EssaiMeta }) {
  return (
    <article className="group border-t border-stone-200 pt-8 pb-10">
      <Link href={`/essais/${essai.slug}`} className="block">
        <div className="flex items-baseline justify-between mb-3">
          <time className="text-xs text-stone-400 tracking-wide uppercase">
            {formatDate(essai.date)}
          </time>
          <span className="text-xs text-stone-400">{essai.readingTime}</span>
        </div>
        <h2 className="font-serif text-2xl text-stone-800 mb-3 group-hover:text-stone-600 transition-colors leading-snug">
          {essai.title}
        </h2>
        <p className="text-stone-500 leading-relaxed text-base line-clamp-3">
          {essai.extrait}
        </p>
      </Link>
    </article>
  );
}
