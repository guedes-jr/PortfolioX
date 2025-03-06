import type { Metadata } from "next"
import { generateMetadata } from "@/src/lib/metadata"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { StocksTable } from "@/src/components/rankings/stocks-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

export const metadata: Metadata = generateMetadata("rankings")

const rankingCategories = [
  {
    id: "liquidity",
    name: "Liquidez",
    description: "Ações ordenadas por volume financeiro médio diário",
    metric: "Volume médio diário negociado",
  },
  {
    id: "value",
    name: "Valor",
    description: "Ações ordenadas por valor patrimonial",
    metric: "Relação Preço/Valor Patrimonial (P/VP)",
  },
  {
    id: "dividend",
    name: "Dividendos",
    description: "Ações ordenadas por dividend yield",
    metric: "Dividend Yield (DY)",
  },
  {
    id: "growth",
    name: "Crescimento",
    description: "Ações ordenadas por crescimento e rentabilidade",
    metric: "Retorno sobre o Patrimônio (ROE)",
  },
]

export default function RankingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rankings</h1>
          <p className="text-muted-foreground">Explore as ações do mercado classificadas por diferentes métricas</p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {rankingCategories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Métrica principal: {category.metric}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">Todas as Métricas</TabsTrigger>
            <TabsTrigger value="liquidity">Liquidez</TabsTrigger>
            <TabsTrigger value="value">Valor</TabsTrigger>
            <TabsTrigger value="dividend">Dividendos</TabsTrigger>
            <TabsTrigger value="growth">Crescimento</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <StocksTable />
          </TabsContent>
          <TabsContent value="liquidity">
            <StocksTable />
          </TabsContent>
          <TabsContent value="value">
            <StocksTable />
          </TabsContent>
          <TabsContent value="dividend">
            <StocksTable />
          </TabsContent>
          <TabsContent value="growth">
            <StocksTable />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

