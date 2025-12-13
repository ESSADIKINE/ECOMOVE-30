import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECOMOVE-30 | Mobilité Électrique Solaire Intelligente",
  description: "Solutions de mobilité électrique solaire pour un avenir durable. Tricycles électriques, batteries LFP, systèmes solaires et IA embarquée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
