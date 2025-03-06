import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { AssetsTable } from "@/src/components/analysis/assets-table"
import { AssetComparison } from "@/src/components/analysis/asset-comparison"
import { SectorDistribution } from "@/src/components/analysis/sector-distribution"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("analysis")

export default function AnalysisPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Análise de Ativos</h1>
          <p className="text-muted-foreground">Acompanhe e compare o desempenho dos ativos</p>
        </div>

        <AssetsTable />

        <div className="grid gap-6 md:grid-cols-2">
          <AssetComparison />
          <SectorDistribution />
        </div>
      </div>
    </DashboardLayout>
  )
}

