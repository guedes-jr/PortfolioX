import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/globals.css"; // Certifique-se de que o caminho está correto
import { ThemeProvider } from "@/src/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard de Investimentos",
  description: "Dashboard para gerenciamento de investimentos",
  generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}