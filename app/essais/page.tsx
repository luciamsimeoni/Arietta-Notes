import Nav from "@/components/Nav";
import EssaiCard from "@/components/EssaiCard";
import { getAllEssais } from "@/lib/essais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes — Arietta Confetteria",
  description: "Toutes les notes d'Arietta Confetteria.",
};

export default function EssaisPage() {
  const essais = getAllEssais();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f5f1" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <main>
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
