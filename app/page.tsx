import Link from "next/link";
import Nav from "@/components/Nav";
import EssaiCard from "@/components/EssaiCard";
import { getAllEssais } from "@/lib/essais";

export default function Home() {
  const essais = getAllEssais();
  const recents = essais.slice(0, 3);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0e9e0" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <main>
          {/* Texte d'introduction */}
          <section className="mb-14 mt-6">
            <p className="font-serif text-[1.65rem] leading-[1.65] text-[#1c1a17]">
              J&apos;écris pour penser à voix haute.
              <br />
              Ces essais naissent de la création d&apos;Arietta,
              <br />
              une marque de confiserie en cours de développement.
              <br />
              Ils explorent le travail, le goût, la fabrication,
              <br />
              le temps, les objets et les entreprises.
            </p>
          </section>

          {/* Filet doré */}
          <div
            className="mb-12"
            style={{
              width: "2.5rem",
              height: "1px",
              backgroundColor: "#9e7e52",
            }}
          />

          {/* Essais récents */}
          <section>
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-[#8a7e72] mb-6">
              Derniers essais
            </p>

            <div>
              {recents.map((essai) => (
                <EssaiCard key={essai.slug} essai={essai} />
              ))}
            </div>

            {/* Lien vers tous les essais */}
            <div className="pt-10 pb-4">
              <Link
                href="/essais"
                className="group inline-flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase text-[#1c1a17] border-b border-[#1c1a17] pb-px hover:opacity-50 transition-opacity"
              >
                Voir tous les essais
                <span className="group-hover:translate-x-1 transition-transform text-sm">→</span>
              </Link>
            </div>
          </section>
        </main>

        <footer className="mt-24 pb-10" />
      </div>
    </div>
  );
}
