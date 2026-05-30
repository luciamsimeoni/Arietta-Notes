import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Lucia Simeoni",
  description: "Lucia Simeoni — créatrice de la marque Arietta.",
};

export default function APropos() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0e9e0" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <main className="max-w-[560px]">
          <header className="mb-12">
            <h1 className="font-serif text-[2.4rem] leading-tight text-[#1c1a17]">
              À propos
            </h1>
            <div
              className="mt-6"
              style={{
                width: "2.5rem",
                height: "1px",
                backgroundColor: "#9e7e52",
              }}
            />
          </header>

          <div className="prose-essai space-y-7">
            <p>
              Je m&apos;appelle Lucia Simeoni. Je travaille à la création d&apos;Arietta,
              une petite marque de confiserie fondée sur l&apos;idée qu&apos;un bonbon peut
              être une chose sérieuse — pensée, fabriquée avec soin, et méritant
              qu&apos;on s&apos;y attarde.
            </p>

            <p>
              Ces essais ne sont pas un journal de bord du projet. Ils partent
              de cette expérience — des rencontres avec les fabricants, des
              questions sur les matières, des doutes sur le sens de ce qu&apos;on
              fait quand on crée quelque chose de petit — pour aller vers des
              questions plus larges.
            </p>

            <p>
              Ce qui m&apos;intéresse : le travail bien fait, les objets qui ont une
              raison d&apos;être, la différence entre le goût comme sensation et le
              goût comme jugement, et ce que signifie construire une entreprise
              dont on peut être fier sans qu&apos;elle ait besoin d&apos;être grande.
            </p>

            <p>
              Arietta est en cours de construction. Ces textes le sont aussi.
            </p>
          </div>
        </main>

        <footer className="mt-24 pb-10" />
      </div>
    </div>
  );
}
