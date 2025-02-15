"use client"
import React from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import AssetList from "@/components/AssetList";

// Crie uma instância de QueryClient
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}