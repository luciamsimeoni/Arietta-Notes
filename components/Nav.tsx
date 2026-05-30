import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-baseline justify-between py-10 mb-16">
      <Link
        href="/"
        className="font-serif text-lg tracking-tight text-stone-800 hover:text-stone-600 transition-colors"
      >
        Lucia Simeoni
      </Link>
      <div className="flex gap-8 text-sm text-stone-500">
        <Link href="/essais" className="hover:text-stone-800 transition-colors">
          Essais
        </Link>
        <Link href="/a-propos" className="hover:text-stone-800 transition-colors">
          À propos
        </Link>
      </div>
    </nav>
  );
}
