import Nav from "@/components/Nav";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Lucia Simeoni",
  description: "Lucia Simeoni — créatrice de la marque Arietta.",
};

export default function APropos() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f5f1" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <main className="max-w-[560px] -mt-6">
          {/* Photo */}
          <div className="mb-6">
            <Image
              src="/PhotoRond.png"
              alt="Lucia Simeoni"
              width={150}
              height={150}
              className="rounded-full object-cover"
              style={{ width: 150, height: 150 }}
            />
          </div>

          {/* Texte */}
          <div className="prose-essai mb-10" style={{ display: "flex", flexDirection: "column", gap: "0.9em" }}>
            <p style={{ marginBottom: 0 }}>
              Je m&apos;appelle Lucia Simeoni.
            </p>
            <p style={{ marginBottom: 0 }}>
              Je développe actuellement Arietta Confetteria, un projet de confiserie industrielle.
            </p>
            <p style={{ marginBottom: 0 }}>
              J&apos;écris ici sur les recherches et les décisions qui accompagnent sa création. Ces textes sont aussi une manière de garder une trace de ce que je pense aujourd&apos;hui, avant de savoir ce qu&apos;il en restera dans quelques années.
            </p>
          </div>

          {/* Liens */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/luciasimeoni/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.7rem] tracking-[0.12em] uppercase text-[#8a7e72] hover:text-[#1c1a17] transition-colors border-b border-[#d8cfc4] pb-px"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="mailto:luciamsimeoni@gmail.com"
              aria-label="Envoyer un email"
              className="text-[#8a7e72] hover:text-[#1c1a17] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </a>
          </div>
        </main>

        <footer className="mt-24 pb-10" />
      </div>
    </div>
  );
}
