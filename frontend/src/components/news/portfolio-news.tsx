"use client"

import { useState } from "react"
import { ExternalLink, Filter } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import Link from "next/link"

type NewsType = "all" | "earnings" | "dividends" | "corporate" | "market"

const newsTypes = {
  all: "Todas",
  earnings: "Resultados",
  dividends: "Dividendos",
  corporate: "Fatos Relevantes",
  market: "Mercado",
}

const portfolioNews = [
  {
    id: "1",
    title: "Petrobras (PETR4) divulga resultados do 4T23",
    description:
      "Empresa reporta lucro líquido de R$ 31,5 bilhões no quarto trimestre, superando expectativas do mercado.",
    asset: "PETR4",
    type: "earnings",
    date: "2024-02-27T15:30:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
  {
    id: "2",
    title: "Vale (VALE3) anuncia pagamento de dividendos",
    description: "Mineradora aprova distribuição de R$ 2,75 por ação, com pagamento previsto para março.",
    asset: "VALE3",
    type: "dividends",
    date: "2024-02-27T14:15:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
  {
    id: "3",
    title: "Itaú (ITUB4) conclui aquisição de fintech",
    description: "Banco anuncia conclusão da compra estratégica para fortalecer sua presença no mercado digital.",
    asset: "ITUB4",
    type: "corporate",
    date: "2024-02-27T13:00:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
  {
    id: "4",
    title: "Análise: Impacto da taxa Selic em BBDC4",
    description: "Especialistas avaliam como a manutenção da taxa básica de juros afeta as perspectivas do Bradesco.",
    asset: "BBDC4",
    type: "market",
    date: "2024-02-27T11:45:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
]

export function PortfolioNews() {
  const [selectedTypes, setSelectedTypes] = useState<NewsType[]>(["all"])

  const filteredNews = portfolioNews.filter(
    (item) => selectedTypes.includes("all") || selectedTypes.includes(item.type as NewsType),
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filtrar por tipo
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {Object.entries(newsTypes).map(([key, label]) => (
              <DropdownMenuCheckboxItem
                key={key}
                checked={selectedTypes.includes(key as NewsType)}
                onCheckedChange={(checked) => {
                  if (key === "all") {
                    setSelectedTypes(checked ? ["all"] : [])
                  } else {
                    setSelectedTypes((prev) => {
                      const withoutAll = prev.filter((type) => type !== "all")
                      if (checked) {
                        return [...withoutAll, key as NewsType]
                      }
                      return withoutAll.filter((type) => type !== key)
                    })
                  }
                }}
              >
                {label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ScrollArea className="h-[600px] pr-4">
        <div className="grid gap-6">
          {filteredNews.map((item) => (
            <Card key={item.id} className="transition-shadow hover:shadow-md">
              <Link href={`/dashboard/news/${item.id}`}>
                <CardHeader className="flex-row gap-4 space-y-0">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {item.asset}
                      </span>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{formatDate(item.date)}</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-[1fr_300px]">
                  <p className="text-muted-foreground">{item.description}</p>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt=""
                    className="hidden rounded-lg object-cover md:block"
                    width={300}
                    height={200}
                  />
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

