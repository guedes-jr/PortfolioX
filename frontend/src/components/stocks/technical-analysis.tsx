import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"

interface TechnicalAnalysisProps {
  code: string
}

const indicators = [
  {
    name: "Média Móvel 20",
    value: "R$ 34,50",
    signal: "compra",
  },
  {
    name: "Média Móvel 50",
    value: "R$ 33,80",
    signal: "compra",
  },
  {
    name: "Média Móvel 200",
    value: "R$ 32,90",
    signal: "compra",
  },
  {
    name: "RSI",
    value: "65",
    signal: "neutro",
  },
  {
    name: "MACD",
    value: "0.85",
    signal: "compra",
  },
  {
    name: "Bandas de Bollinger",
    value: "Média",
    signal: "neutro",
  },
]

export function TechnicalAnalysis({ code }: TechnicalAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Análise Técnica</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {indicators.map((indicator) => (
            <div key={indicator.name} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{indicator.name}</p>
                <p className="text-sm text-muted-foreground">{indicator.value}</p>
              </div>
              <Badge
                variant={
                  indicator.signal === "compra" ? "default" : indicator.signal === "venda" ? "destructive" : "secondary"
                }
              >
                {indicator.signal}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

