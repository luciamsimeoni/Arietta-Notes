import Nav from "@/components/Nav";
import EssaiCard from "@/components/EssaiCard";
import { getAllEssais } from "@/lib/essais";

export default function Home() {
  const essais = getAllEssais();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f5f1" }}>
      <div className="max-w-[720px] mx-auto px-8">
        <Nav />

        <main>
          <ul className="mt-6">
            {essais.map((essai) => (
              <EssaiCard key={essai.slug} essai={essai} />
            ))}
          </ul>
        </main>

        <footer className="mt-24 pb-10" />
      </div>
    </div>
  );
}
