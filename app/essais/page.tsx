import Nav from "@/components/Nav";
import EssaiCard from "@/components/EssaiCard";
import { getAllEssais } from "@/lib/essais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essais — Lucia Simeoni",
  description: "Tous les essais de Lucia Simeoni.",
};

export default function EssaisPage() {
  const essais = getAllEssais();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f2f1" }}>
      <div className="max-w-2xl mx-auto px-6">
        <Nav />

        <main>
          <header className="mb-16">
            <h1 className="font-serif text-4xl text-stone-800 mb-3">Essais</h1>
            <p className="text-stone-400 text-sm">{essais.length} textes</p>
          </header>

          <div className="space-y-0">
            {essais.map((essai) => (
              <EssaiCard key={essai.slug} essai={essai} />
            ))}
          </div>
        </main>

        <footer className="mt-32 pb-16" />
      </div>
    </div>
  );
}
