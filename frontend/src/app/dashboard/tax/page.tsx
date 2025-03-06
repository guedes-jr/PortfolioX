import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { TaxSummary } from "@/src/components/tax/tax-summary"
import { OperationsSummary } from "@/src/components/tax/operations-summary"
import { CapitalGains } from "@/src/components/tax/capital-gains"
import { TaxLosses } from "@/src/components/tax/tax-losses"
import { DividendTax } from "@/src/components/tax/dividend-tax"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("tax")

export default function TaxPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Controle IRPF</h1>
          <p className="text-muted-foreground">
            Acompanhe a tributação dos seus investimentos e prepare sua declaração
          </p>
        </div>

        <TaxSummary />

        <Tabs defaultValue="operations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="operations">Operações</TabsTrigger>
            <TabsTrigger value="capital-gains">Ganho de Capital</TabsTrigger>
            <TabsTrigger value="losses">Prejuízos</TabsTrigger>
            <TabsTrigger value="dividends">Proventos</TabsTrigger>
          </TabsList>
          <TabsContent value="operations">
            <OperationsSummary />
          </TabsContent>
          <TabsContent value="capital-gains">
            <CapitalGains />
          </TabsContent>
          <TabsContent value="losses">
            <TaxLosses />
          </TabsContent>
          <TabsContent value="dividends">
            <DividendTax />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

