import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { ExternalLink } from "lucide-react"

interface StockNewsProps {
  code: string
}

const news = [
  {
    title: "Petrobras anuncia novo plano de investimentos",
    source: "Valor Econômico",
    date: "2024-02-26",
    url: "#",
  },
  {
    title: "Produção de petróleo atinge recorde em janeiro",
    source: "InfoMoney",
    date: "2024-02-25",
    url: "#",
  },
  {
    title: "Análise: perspectivas para o setor de energia em 2024",
    source: "Reuters",
    date: "2024-02-24",
    url: "#",
  },
]

export function StockNews({ code }: StockNewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Últimas Notícias</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.title} className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium">{item.title}</h4>
                <Button variant="ghost" size="icon" asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{item.source}</span>
                <span>•</span>
                <span>{new Date(item.date).toLocaleDateString("pt-BR")}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

