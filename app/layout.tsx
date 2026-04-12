import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin", "latin-ext"], variable: "--font-nunito" });
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "cmok — codzienny znak, że jest OK",
  description: "Darmowa aplikacja dla bliskich osób, które mieszkają osobno. Codzienny gest zamiast dzwonienia, spokój zamiast stresu.",
  openGraph: {
    title: "cmok — codzienny znak, że jest OK",
    description: "Jeden tap dziennie. Spokój dla obu stron.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${nunito.variable} ${inter.variable} antialiased`}>
      <body className="bg-[#FFF8F2] text-[#2D2926]">{children}</body>
    </html>
  );
}
