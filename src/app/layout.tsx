import TanStackProvider from "@/api/tanstack-query";
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
      <body className={inter.className}>
        <div className="flex w-full justify-center bg-primary">
          <h1 className="py-6 text-4xl font-bold text-white">
            REACT<span className="text-feedback-warning">JS</span>
          </h1>
        </div>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
