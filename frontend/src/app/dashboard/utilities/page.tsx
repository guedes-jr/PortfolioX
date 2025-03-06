import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { CompoundInterestCalculator } from "@/src/components/utilities/compound-interest"
import { AllocationCalculator } from "@/src/components/utilities/allocation-calculator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("utilities")

export default function UtilitiesPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Utilitários</h1>
          <p className="text-muted-foreground">Ferramentas úteis para auxiliar em suas decisões de investimento</p>
        </div>

        <Tabs defaultValue="compound-interest" className="space-y-4">
          <TabsList>
            <TabsTrigger value="compound-interest">Juros Compostos</TabsTrigger>
            <TabsTrigger value="allocation">Calculadora de Aporte</TabsTrigger>
          </TabsList>
          <TabsContent value="compound-interest">
            <CompoundInterestCalculator />
          </TabsContent>
          <TabsContent value="allocation">
            <AllocationCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

