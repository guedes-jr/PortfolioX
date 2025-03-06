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

type NewsCategory = "all" | "market" | "stocks" | "crypto" | "commodities" | "forex"

const categories = {
  all: "Todas",
  market: "Mercado",
  stocks: "Ações",
  crypto: "Criptomoedas",
  commodities: "Commodities",
  forex: "Câmbio",
}

const news = [
  {
    id: "1",
    title: "Banco Central mantém taxa Selic em 11,75% ao ano",
    description:
      "Copom decide manter taxa básica de juros, citando necessidade de cautela diante do cenário econômico atual.",
    source: "InfoMoney",
    category: "market",
    date: "2024-02-27T15:30:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
  {
    id: "2",
    title: "Petrobras anuncia novo plano de investimentos",
    description:
      "Empresa prevê investimentos de US$ 102 bilhões para os próximos cinco anos, com foco em exploração e produção.",
    source: "Valor Econômico",
    category: "stocks",
    date: "2024-02-27T14:15:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
  {
    id: "3",
    title: "Bitcoin atinge nova máxima histórica",
    description: "Criptomoeda supera US$ 69 mil pela primeira vez, impulsionada por aprovação de ETFs à vista nos EUA.",
    source: "CoinDesk",
    category: "crypto",
    date: "2024-02-27T13:00:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
  {
    id: "4",
    title: "Preço do petróleo sobe com tensões no Oriente Médio",
    description: "Barril do Brent ultrapassa US$ 85 após novos conflitos na região afetarem expectativas de oferta.",
    source: "Reuters",
    category: "commodities",
    date: "2024-02-27T11:45:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
  {
    id: "5",
    title: "Dólar recua com expectativa de corte de juros nos EUA",
    description: "Moeda americana cai frente ao real após sinais do Fed sobre possível redução nas taxas de juros.",
    source: "Bloomberg",
    category: "forex",
    date: "2024-02-27T10:30:00",
    image: "/placeholder.svg?height=200&width=300",
    url: "#",
  },
]

export function GeneralNews() {
  const [selectedCategories, setSelectedCategories] = useState<NewsCategory[]>(["all"])

  const filteredNews = news.filter(
    (item) => selectedCategories.includes("all") || selectedCategories.includes(item.category as NewsCategory),
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
              Filtrar por categoria
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {Object.entries(categories).map(([key, label]) => (
              <DropdownMenuCheckboxItem
                key={key}
                checked={selectedCategories.includes(key as NewsCategory)}
                onCheckedChange={(checked) => {
                  if (key === "all") {
                    setSelectedCategories(checked ? ["all"] : [])
                  } else {
                    setSelectedCategories((prev) => {
                      const withoutAll = prev.filter((cat) => cat !== "all")
                      if (checked) {
                        return [...withoutAll, key as NewsCategory]
                      }
                      return withoutAll.filter((cat) => cat !== key)
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
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>
                      {item.source} • {formatDate(item.date)}
                    </CardDescription>
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

