import TanStackProvider from "@/api/tanstack-query";
import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Header from "@/components/Header";

const inter = Mulish({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Front Winnin",
  description: "Teste para a vaga de front end",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background" data-mode="light">
      <body className={inter.className}>
        <Header />
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
