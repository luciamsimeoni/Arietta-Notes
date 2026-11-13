import Link from "next/link";
import { EssaiMeta, formatDate } from "@/lib/essais";
import AudioPlayer from "@/components/AudioPlayer";

export default function EssaiCard({ essai }: { essai: EssaiMeta }) {
  return (
    <li className="py-4 list-none">
      {/* Layout desktop : date + titre + boutons sur une ligne */}
      <div className="hidden sm:flex sm:items-center sm:gap-6">
        <time className="shrink-0 text-[0.63rem] tracking-[0.12em] uppercase text-[#8a7e72] w-28">
          {formatDate(essai.date)}
        </time>
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/${essai.slug}`}
            className="font-serif text-[1.2rem] text-[#1c1a17] hover:opacity-50 transition-opacity"
          >
            {essai.title}
          </Link>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/${essai.slug}`}
              className="hover:opacity-70 transition-opacity"
              style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", border:"1px solid #7a5c2e", borderRadius:9999, padding:"0.25rem 0.65rem", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#7a5c2e", fontFamily:"Inter, sans-serif", fontWeight:500, backgroundColor:"rgba(122,92,46,0.08)", textDecoration:"none" }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              Lire
            </Link>
            <AudioPlayer src={essai.audio} />
          </div>
        </div>
      </div>

      {/* Layout mobile : date, puis titre, puis boutons */}
      <div className="sm:hidden">
        <time className="block text-[0.7rem] tracking-[0.12em] uppercase text-[#8a7e72] mb-2">
          {formatDate(essai.date)}
        </time>
        <Link
          href={`/${essai.slug}`}
          className="font-serif text-[1.35rem] leading-snug text-[#1c1a17] hover:opacity-50 transition-opacity block mb-3"
        >
          {essai.title}
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={`/${essai.slug}`}
            className="hover:opacity-70 transition-opacity"
            style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", border:"1px solid #7a5c2e", borderRadius:9999, padding:"0.25rem 0.65rem", fontSize:"0.68rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#7a5c2e", fontFamily:"Inter, sans-serif", fontWeight:500, backgroundColor:"rgba(122,92,46,0.08)", textDecoration:"none" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Lire
          </Link>
          <AudioPlayer src={essai.audio} />
        </div>
      </div>
    </li>
  );
}
