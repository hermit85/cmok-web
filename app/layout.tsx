import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin", "latin-ext"], variable: "--font-nunito" });
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "cmok — codzienny znak, że jest OK",
  description: "Darmowa aplikacja dla bliskich osób, które mieszkają osobno. Codzienny gest zamiast dzwonienia, spokój zamiast stresu.",
  metadataBase: new URL("https://cmok.app"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "cmok — codzienny znak, że jest OK",
    description: "Jeden tap dziennie. Spokój dla obu stron.",
    type: "website",
    url: "https://cmok.app",
    siteName: "cmok",
    locale: "pl_PL",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "cmok — codzienny znak, że jest OK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "cmok — codzienny znak, że jest OK",
    description: "Jeden tap dziennie. Spokój dla obu stron.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "cmok",
  "applicationCategory": "SocialNetworkingApplication",
  "operatingSystem": "iOS",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PLN" },
  "description": "Codzienny znak, że u bliskiej osoby wszystko OK. Jeden gest zamiast dzwonienia.",
  "url": "https://cmok.app",
  "downloadUrl": "https://apps.apple.com/pl/app/cmok/id6760717645",
  "author": { "@type": "Organization", "name": "Cybird Consulting Dariusz Ptaszek" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${nunito.variable} ${inter.variable} antialiased`}>
      <body className="bg-[#FFF8F2] text-[#2D2926]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
