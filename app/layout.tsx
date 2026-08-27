import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CV - Farid Rojas",
  description:
    "Carlos Farid Rojas — Automatización de procesos logísticos, análisis de datos y soluciones digitales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${ibm.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
