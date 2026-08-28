import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import Header from "@/components/Header";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Farid Rojas | Portafolio",
  description:
    "Carlos Farid Rojas — Automatización de procesos logísticos, análisis de datos y soluciones digitales.",
  icons: {
    icon: [{ url: "/icon.png?v=3", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png?v=3", type: "image/png" }],
    shortcut: [{ url: "/icon.png?v=3", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${ibm.variable}`}>
      <head>
        <link rel="icon" href="/icon.png?v=3" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" />
      </head>
      <body>
        <PageTransitionProvider>
          <Header />
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
