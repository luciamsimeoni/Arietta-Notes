import { notFound } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";
import Nav from "@/components/Nav";
import Prose from "@/components/Prose";
import AudioPlayer from "@/components/AudioPlayer";
import { getAllEssais, getEssaiBySlug, formatDate } from "@/lib/essais";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEssais().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essai = getEssaiBySlug(slug);
  if (!essai) return {};
  return {
    title: `${essai.title} — Arietta Confetteria`,
    description: essai.extrait,
    openGraph: {
      title: essai.title,
      description: essai.extrait,
      type: "article",
      publishedTime: essai.date,
    },
  };
}

export default async function EssaiPage({ params }: Props) {
  const { slug } = await params;
  const essai = getEssaiBySlug(slug);
  if (!essai) notFound();

  const html = await marked(essai.content, { breaks: false });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f5f1" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <article className="max-w-[580px]">
          <header className="mb-12">
            <div className="flex items-center gap-5 mb-7">
              <time className="text-[0.65rem] tracking-[0.14em] uppercase text-[#8a7e72]">
                {formatDate(essai.date)}
              </time>
              <span className="text-[#d8cfc4]">·</span>
              <span className="text-[0.65rem] tracking-[0.14em] uppercase text-[#8a7e72]">
                {essai.readingTime} de lecture
              </span>
              <AudioPlayer src={essai.audio} />
            </div>

            <h1 className="font-serif text-[2.4rem] leading-[1.15] text-[#1c1a17] mb-6">
              {essai.title}
            </h1>

            <div
              className="mt-8"
              style={{ width: "2.5rem", height: "1px", backgroundColor: "#9e7e52" }}
            />
          </header>

          <Prose html={html} />
        </article>

        <footer className="mt-20 pb-12 border-t border-[#d8cfc4] pt-8">
          <Link
            href="/"
            className="text-[0.65rem] tracking-[0.14em] uppercase text-[#8a7e72] hover:text-[#1c1a17] transition-colors"
          >
            ← Toutes les notes
          </Link>
        </footer>
      </div>
    </div>
  );
}
