import { notFound } from "next/navigation";
import { marked } from "marked";
import Nav from "@/components/Nav";
import Prose from "@/components/Prose";
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
    title: `${essai.title} — Lucia Simeoni`,
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
    <div className="min-h-screen" style={{ backgroundColor: "#f8f2f1" }}>
      <div className="max-w-2xl mx-auto px-6">
        <Nav />

        <article>
          <header className="mb-12">
            <div className="flex items-baseline gap-4 mb-5 text-sm text-stone-400">
              <time>{formatDate(essai.date)}</time>
              <span>{essai.readingTime} de lecture</span>
            </div>
            <h1 className="font-serif text-4xl text-stone-800 leading-tight">
              {essai.title}
            </h1>
          </header>

          <Prose html={html} />
        </article>

        <footer className="mt-24 pb-16 border-t border-stone-200 pt-8">
          <a
            href="/essais"
            className="text-stone-400 text-sm hover:text-stone-600 transition-colors"
          >
            ← Tous les essais
          </a>
        </footer>
      </div>
    </div>
  );
}
