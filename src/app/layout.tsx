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
        <div className="w-screen bg-primary flex justify-center">
          <h1 className="text-4xl font-bold py-6 text-white">
            REACT<span className="text-feedback-warning">JS</span>
          </h1>
        </div>
        {children}
      </body>
    </html>
  );
}
