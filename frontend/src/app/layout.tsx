import type { Metadata } from "next";
import { AuthProvider } from "../context/AuthContext"; // Importando o AuthProvider
import "@/styles/globals.css"; // Seu CSS global

export const metadata: Metadata = {
  title: "PortfolioX",
  description: "Gerenciador de Investimentos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}