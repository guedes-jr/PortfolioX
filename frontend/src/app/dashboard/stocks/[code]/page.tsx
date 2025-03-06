import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { StockOverview } from "@/src/components/stocks/stock-overview"
import { StockChart } from "@/src/components/stocks/stock-chart"
import { CompanyInfo } from "@/src/components/stocks/company-info"
import { FinancialIndicators } from "@/src/components/stocks/financial-indicators"
import { DividendHistory } from "@/src/components/stocks/dividend-history"
import { TechnicalAnalysis } from "@/src/components/stocks/technical-analysis"
import { StockNews } from "@/src/components/stocks/stock-news"
import { SimilarStocks } from "@/src/components/stocks/similar-stocks"
import { CompanyReports } from "@/src/components/stocks/company-reports"

interface StockPageProps {
  params: {
    code: string
  }
}

interface Stock {
  code: string
  name: string
  price: number
  change: number
  volume: number
  marketCap: number
  sector: string
}

// This would normally come from an API
const getStockData = async (code: string): Promise<Stock | null> => {
  // Mock data - replace with real API call
  const stocks: Record<string, Stock> = {
    PETR4: {
      code: "PETR4",
      name: "Petrobras PN",
      price: 35.82,
      change: 1.25,
      volume: 1250000,
      marketCap: 450000000000,
      sector: "Petróleo e Gás",
    },
    VALE3: {
      code: "VALE3",
      name: "Vale ON",
      price: 68.9,
      change: -0.8,
      volume: 980000,
      marketCap: 380000000000,
      sector: "Mineração",
    },
    ITUB4: {
      code: "ITUB4",
      name: "Itaú Unibanco PN",
      price: 32.54,
      change: 0.5,
      volume: 850000,
      marketCap: 320000000000,
      sector: "Financeiro",
    },
    BBDC4: {
      code: "BBDC4",
      name: "Bradesco PN",
      price: 15.32,
      change: -1.2,
      volume: 750000,
      marketCap: 280000000000,
      sector: "Financeiro",
    },
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return stocks[code.toUpperCase()] || null
}

export async function generateMetadata({ params }: StockPageProps): Promise<Metadata> {
  const stock = await getStockData(params.code)

  if (!stock) {
    return {
      title: "Ação não encontrada | InvestFolio",
      description: "A ação solicitada não foi encontrada",
    }
  }

  return {
    title: `${stock.code} - ${stock.name} | InvestFolio`,
    description: `Análise detalhada da ação ${stock.code} (${stock.name}) - Setor: ${stock.sector}`,
  }
}

export default async function StockPage({ params }: StockPageProps) {
  const stock = await getStockData(params.code)

  if (!stock) {
    notFound()
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <StockOverview stock={stock} />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <StockChart code={stock.code} />
          </div>
          <div>
            <CompanyInfo code={stock.code} sector={stock.sector} />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <FinancialIndicators code={stock.code} />
          <DividendHistory code={stock.code} />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <TechnicalAnalysis code={stock.code} />
          <StockNews code={stock.code} />
        </div>
        <SimilarStocks code={stock.code} sector={stock.sector} />
        <CompanyReports code={stock.code} />
      </div>
    </DashboardLayout>
  )
}

