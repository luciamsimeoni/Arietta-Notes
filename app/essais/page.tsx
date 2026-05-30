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
    <div className="min-h-screen" style={{ backgroundColor: "#f0e9e0" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <main>
          <header className="mb-10">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-[#8a7e72]">
              {essais.length} essais
            </p>
          </header>

          <div>
            {essais.map((essai) => (
              <EssaiCard key={essai.slug} essai={essai} />
            ))}
          </div>
        </main>

        <footer className="mt-24 pb-10" />
      </div>
    </div>
  );
}
