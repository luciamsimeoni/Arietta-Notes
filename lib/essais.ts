import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const ESSAIS_DIR = path.join(process.cwd(), "content/essais");

export interface EssaiMeta {
  slug: string;
  title: string;
  date: string;
  extrait: string;
  image?: string;
  audio?: string;
  readingTime: string;
}

export interface Essai extends EssaiMeta {
  content: string;
  audio?: string;
}

function formatReadingTime(rt: { text: string; minutes: number }): string {
  const minutes = Math.ceil(rt.minutes);
  return `${minutes} min`;
}

export function getAllEssais(): EssaiMeta[] {
  const files = fs.readdirSync(ESSAIS_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(ESSAIS_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        extrait: data.extrait as string,
        image: data.image as string | undefined,
        audio: data.audio as string | undefined,
        readingTime: formatReadingTime(readingTime(content)),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEssaiBySlug(slug: string): Essai | null {
  const filePath = path.join(ESSAIS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    extrait: data.extrait as string,
    image: data.image as string | undefined,
    audio: data.audio as string | undefined,
    readingTime: formatReadingTime(readingTime(content)),
    content,
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
}
