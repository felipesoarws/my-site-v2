import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import Squares from "@/app/components/Background";

import { LanguageProvider } from "@/context/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "felp @ your fav. developer",
  description:
    "Portfólio de Felipe Soares, desenvolvedor front-end que tem conhecimento em React.js, Next.js, TypeScript, Tailwind entre outras habilidades.",
  icons: {
    icon: "/icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="fixed bottom-0 top-0 right-0 left-0">
            <Squares
              speed={0.3}
              squareSize={40}
              direction="diagonal" // up, down, left, right, diagonal
              borderColor="#424144"
              hoverFillColor="#222"
            />
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
