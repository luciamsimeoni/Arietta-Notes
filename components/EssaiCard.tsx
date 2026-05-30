import Link from "next/link";
import Image from "next/image";
import { EssaiMeta, formatDate } from "@/lib/essais";

export default function EssaiCard({ essai }: { essai: EssaiMeta }) {
  return (
    <article className="border-t border-[#d8cfc4] py-8">
      <Link
        href={`/essais/${essai.slug}`}
        className="group flex items-start gap-7"
      >
        {/* Image */}
        <div className="shrink-0 w-[170px] h-[130px] bg-[#ddd4c8] overflow-hidden">
          {essai.image ? (
            <Image
              src={essai.image}
              alt={essai.title}
              width={170}
              height={130}
              className="w-full h-full object-cover grayscale contrast-[0.9] brightness-95"
            />
          ) : (
            <div className="w-full h-full bg-[#ddd4c8]" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex items-start justify-between gap-4 pt-1">
          <div>
            <h2 className="font-serif text-[1.45rem] leading-snug text-[#1c1a17] mb-2.5 group-hover:opacity-70 transition-opacity">
              {essai.title}
            </h2>
            <p className="font-serif text-[0.95rem] leading-relaxed text-[#5a5048] mb-4 line-clamp-3 max-w-sm">
              {essai.extrait}
            </p>
            <time className="text-[0.65rem] tracking-[0.14em] uppercase text-[#8a7e72]">
              {formatDate(essai.date)}
            </time>
          </div>
          <span
            className="shrink-0 text-[#1c1a17] text-lg mt-1 group-hover:translate-x-1 transition-transform"
            aria-hidden
          >
            →
          </span>
        </div>
      </Link>
    </article>
  );
}
