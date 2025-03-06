import { ArrowDown, ArrowUp, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

type DividendsSummaryProps = {
  type: "stocks" | "reits" | "us-stocks"
  date: Date
}

export function DividendsSummary({ type, date }: DividendsSummaryProps) {
  // Mock data - replace with real data
  const summaryData = {
    stocks: {
      total: 2345.67,
      count: 8,
      change: 15.2,
      average: 293.21,
    },
    reits: {
      total: 1234.56,
      count: 5,
      change: -3.8,
      average: 246.91,
    },
    "us-stocks": {
      total: 567.89,
      count: 3,
      change: 7.5,
      average: 189.3,
    },
  }

  const data = summaryData[type]

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Proventos</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
          <p className="text-xs text-muted-foreground">{data.count} pagamentos este mês</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Variação Mensal</CardTitle>
          {data.change >= 0 ? (
            <ArrowUp className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500" />
          )}
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${data.change >= 0 ? "text-green-500" : "text-red-500"}`}>
            {data.change >= 0 ? "+" : ""}
            {data.change}%
          </div>
          <p className="text-xs text-muted-foreground">Em relação ao mês anterior</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Média por Ativo</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data.average.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
          <p className="text-xs text-muted-foreground">Por ativo pagante</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Yield Mensal</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0.52%</div>
          <p className="text-xs text-muted-foreground">Em relação ao patrimônio</p>
        </CardContent>
      </Card>
    </div>
  )
}

