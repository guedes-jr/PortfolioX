"use client"
import React from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import AssetList from "@/components/AssetList";
import { AuthProvider } from '@/context/AuthContext';

// Crie uma instância de QueryClient
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div>
          <Head>
            <title>PortfolioX</title>
            <meta name="description" content="Gerenciamento de Investimentos" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <AssetList />
          </main>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}