import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "AMH Cours - Comprenez le Coran",
  description: "Formation d'arabe et sciences islamiques en direct.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn(
        inter.variable,
        playfair.variable,
        "font-sans antialiased bg-stone-50 text-stone-900 bg-noise relative overflow-x-hidden selection:bg-emerald-800/20 selection:text-emerald-900"
      )}>
        {children}
      </body>
    </html>
  );
}
