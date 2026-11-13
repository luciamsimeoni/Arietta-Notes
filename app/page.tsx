import Nav from "@/components/Nav";
import EssaiCard from "@/components/EssaiCard";
import { getAllEssais } from "@/lib/essais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes — Arietta Confetteria",
  description: "Toutes les notes d'Arietta Confetteria.",
};

export default function HomePage() {
  const essais = getAllEssais();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f5f1" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <main>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {essais.map((essai) => (
              <EssaiCard key={essai.slug} essai={essai} />
            ))}
          </ul>
        </main>

        <footer className="mt-24 pb-10">
          <p className="text-[0.6rem] tracking-[0.12em] uppercase text-[#8a7e72]">© Lucia Simeoni, 2026</p>
        </footer>
      </div>
    </div>
  );
}
