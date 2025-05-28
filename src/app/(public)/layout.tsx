import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
