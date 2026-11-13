import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arietta Confetteria — Notes",
  description:
    "Notes sur le travail, la fabrication, le goût et la création, à travers l'expérience de la marque Arietta.",
  openGraph: {
    title: "Arietta Confetteria — Notes",
    description:
      "Essais personnels sur le travail, la fabrication, le goût et la création.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${garamond.variable} h-full`}>
      <body
        className="min-h-full"
        style={{
          backgroundColor: "#f8f2f1",
          fontFamily: "var(--font-garamond), Georgia, serif",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
