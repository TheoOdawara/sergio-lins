import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Sérgio Dias Lins | Ginecologia e Obstetrícia",
  description: "Atendimento humanizado e técnico em ginecologia, obstetrícia e tratamento de infertilidade. Agende sua consulta em Campo Grande, RJ.",
  keywords: ["ginecologia", "obstetrícia", "infertilidade", "histeroscopia", "pré-natal", "Campo Grande RJ"],
  icons: {
    icon: [
      { url: "/Flavicon/favicon.ico", type: "image/x-icon" },
      { url: "/Flavicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Flavicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/Flavicon/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/Flavicon/site.webmanifest" },
      { rel: "icon", url: "/Flavicon/android-chrome-192x192.png", type: "image/png" },
      { rel: "icon", url: "/Flavicon/android-chrome-512x512.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-bg-white font-sans text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
