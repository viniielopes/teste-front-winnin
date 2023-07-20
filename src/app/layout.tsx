import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

const inter = Mulish({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Front Winnin",
  description: "Teste para a vaga de front end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
