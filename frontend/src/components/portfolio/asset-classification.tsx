import { TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

const classifications = [
  {
    title: "Renda Variável",
    total: 45250.8,
    percentage: 65.8,
    change: 2.5,
    positive: true,
  },
  {
    title: "Renda Fixa",
    total: 15680.45,
    percentage: 22.8,
    change: -0.3,
    positive: false,
  },
  {
    title: "Fundos Imobiliários",
    total: 7845.9,
    percentage: 11.4,
    change: 1.2,
    positive: true,
  },
]

export function AssetClassification() {
  const total = classifications.reduce((acc, item) => acc + item.total, 0)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {classifications.map((classification) => (
        <Card key={classification.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{classification.title}</CardTitle>
            {classification.positive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(classification.total)}
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{classification.percentage.toFixed(1)}% da carteira</span>
              <span className={classification.positive ? "text-green-500" : "text-red-500"}>
                {classification.positive ? "+" : ""}
                {classification.change}% hoje
              </span>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-secondary">
              <div className="h-2 rounded-full bg-primary" style={{ width: `${classification.percentage}%` }} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

