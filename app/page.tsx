import Link from "next/link";
import Nav from "@/components/Nav";
import EssaiCard from "@/components/EssaiCard";
import { getAllEssais } from "@/lib/essais";

export default function Home() {
  const essais = getAllEssais();
  const recents = essais.slice(0, 3);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f2f1" }}>
      <div className="max-w-2xl mx-auto px-6">
        <Nav />

        <main>
          {/* En-tête */}
          <header className="mb-20">
            <h1 className="font-serif text-5xl text-stone-800 mb-2 leading-tight">
              Lucia Simeoni
            </h1>
            <p className="font-serif text-2xl text-stone-400 italic mb-10">essais</p>
            <p className="text-stone-500 leading-relaxed text-lg max-w-xl">
              Ces textes partent de l&apos;expérience de créer Arietta, une petite
              marque de confiserie, pour réfléchir au travail, à la fabrication,
              au goût, aux objets et aux entreprises.
            </p>
          </header>

          {/* Essais récents */}
          <section>
            <div className="space-y-0">
              {recents.map((essai) => (
                <EssaiCard key={essai.slug} essai={essai} />
              ))}
            </div>

            {essais.length > 3 && (
              <div className="border-t border-stone-200 pt-8 mt-2">
                <Link
                  href="/essais"
                  className="text-stone-400 text-sm hover:text-stone-700 transition-colors"
                >
                  Tous les essais ({essais.length}) →
                </Link>
              </div>
            )}
          </section>
        </main>

        <footer className="mt-32 pb-16 border-t border-stone-200 pt-8">
          <p className="text-stone-400 text-sm">
            <Link href="/a-propos" className="hover:text-stone-600 transition-colors">
              À propos
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
