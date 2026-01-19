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
