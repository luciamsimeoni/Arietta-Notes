import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex items-baseline justify-between pt-10 pb-0 mb-14">
      <div className="flex items-baseline gap-3 flex-wrap">
        <Link
          href="/"
          className="font-serif text-[1.6rem] sm:text-[2.1rem] leading-none tracking-tight text-[#1c1a17] hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Arietta Confetteria
        </Link>
        <span
          className="font-serif italic text-[1rem] sm:text-[1.25rem] leading-none whitespace-nowrap"
          style={{ color: "#7a5c2e" }}
        >
          Notes
        </span>
      </div>
      <nav>
        <Link
          href="/a-propos"
          className="text-[0.72rem] tracking-[0.12em] uppercase text-[#1c1a17] border-b border-[#1c1a17] pb-px hover:opacity-50 transition-opacity"
        >
          À propos
        </Link>
      </nav>
    </header>
  );
}
