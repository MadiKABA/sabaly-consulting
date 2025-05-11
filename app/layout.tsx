import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabaly Consulting | Conseil stratégique, financier et opérationnel en Afrique",
  description:
    "Sabaly Consulting accompagne les PMEs, start-ups et ONG africaines avec des solutions stratégiques, financières et organisationnelles sur mesure. Expertise locale, livrables concrets et impact durable.",
  keywords: [
    "Conseil PME",
    "Stratégie d’entreprise Afrique",
    "Conseil financier Sénégal",
    "Sabaly Consulting",
    "Merry D. Niang",
    "Audit organisationnel",
    "Structuration PME",
    "Non-Profit Growth Lab",
    "SYSCOA",
    "IFRS",
    "US GAAP",
    "SYCEBNL",
    "Accompagnement start-up Afrique",
    "ERP",
    "Cabinet de conseil Sénégal",
    "Consulting Dakar",
    "Coaching entrepreneurial",
    "Audit de performance",
  ],
  authors: [{ name: "Sabaly Consulting", url: "https://sabalyconsulting.com" }],
  creator: "Sabaly Consulting",
  publisher: "Sabaly Consulting",
  openGraph: {
    title: "Sabaly Consulting | Structuration. Conseil. Impact.",
    description:
      "Cabinet de conseil sénégalais engagé auprès des PMEs, start-ups et ONG pour renforcer leur efficacité, leur gouvernance et leur impact.",
    url: "https://sabalyconsulting.com",
    siteName: "Sabaly Consulting",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://sabalyconsulting.com/images/logo.png", // Remplace par une image réelle
        width: 1200,
        height: 630,
        alt: "Sabaly Consulting - Conseil stratégique et structuration en Afrique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabaly Consulting",
    description:
      "Des solutions stratégiques sur mesure pour les organisations africaines : structuration, performance, impact.",
    creator: "@sabalyconsulting", // si disponible
    images: ["https://sabalyconsulting.com/images/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://sabalyconsulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
