import type { Metadata } from "next"
import { generateMetadata } from "@/src/lib/metadata"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { AssetClassification } from "@/src/components/portfolio/asset-classification"
import { AssetDistribution } from "@/src/components/portfolio/asset-distribution"
import { PortfolioAssets } from "@/src/components/portfolio/portfolio-assets"
import { DividendList } from "@/src/components/portfolio/dividend-list"
import { DividendCalendar } from "@/src/components/portfolio/dividend-calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Button } from "@/src/components/ui/button"
import { LayoutGrid, List } from "lucide-react"
import { useState } from "react"
import { AssetTable } from "@/src/components/portfolio/asset-table"

export const metadata: Metadata = generateMetadata("portfolios")

export default function PortfoliosPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Carteira</h1>
          <p className="text-muted-foreground">Gerencie seus investimentos e acompanhe seu desempenho</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="assets">Meus Ativos</TabsTrigger>
            <TabsTrigger value="dividends">Proventos</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <AssetClassification />
            <div className="grid gap-4 md:grid-cols-2">
              <AssetDistribution />
              <AssetTable />
            </div>
          </TabsContent>
          <TabsContent value="assets">
            <PortfolioAssets />
          </TabsContent>
          <TabsContent value="dividends">
            <DividendTabs />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

function DividendTabs() {
  const [view, setView] = useState<"list" | "calendar">("list")

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <div className="inline-flex rounded-lg border p-1">
          <Button
            variant={view === "list" ? "secondary" : "ghost"}
            size="sm"
            className="px-3"
            onClick={() => setView("list")}
          >
            <List className="mr-2 h-4 w-4" />
            Lista
          </Button>
          <Button
            variant={view === "calendar" ? "secondary" : "ghost"}
            size="sm"
            className="px-3"
            onClick={() => setView("calendar")}
          >
            <LayoutGrid className="mr-2 h-4 w-4" />
            Calendário
          </Button>
        </div>
      </div>

      {view === "list" ? <DividendList /> : <DividendCalendar />}
    </div>
  )
}

