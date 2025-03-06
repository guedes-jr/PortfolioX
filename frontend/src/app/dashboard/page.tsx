import type { Metadata } from "next"
import { PortfolioSummary } from "@/src/components/dashboard/portfolio-summary"
import { PortfolioChart } from "@/src/components/dashboard/portfolio-chart"
import { AssetAllocation } from "@/src/components/dashboard/asset-allocation"
import { RecentTransactions } from "@/src/components/dashboard/recent-transactions"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("dashboard")

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Acompanhe seus investimentos em tempo real</p>
        </div>
        <PortfolioSummary />
        <PortfolioChart />
        <div className="grid gap-6 md:grid-cols-2">
          <AssetAllocation />
          <RecentTransactions />
        </div>
      </div>
    </DashboardLayout>
  )
}

