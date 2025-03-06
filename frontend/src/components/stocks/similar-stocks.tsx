"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area"

interface SimilarStocksProps {
  code: string
  sector: string
}

export function SimilarStocks({ code, sector }: SimilarStocksProps) {
  // Filter similar stocks by sector in a real implementation
  const similarStocks = [
    {
      code: "VALE3",
      name: "Vale ON",
      price: 68.9,
      change: -0.8,
    },
    {
      code: "BBAS3",
      name: "Banco do Brasil ON",
      price: 45.67,
      change: 1.2,
    },
    {
      code: "ITUB4",
      name: "Itaú Unibanco PN",
      price: 32.54,
      change: 0.5,
    },
    {
      code: "BBDC4",
      name: "Bradesco PN",
      price: 15.32,
      change: -1.2,
    },
  ].filter((stock) => stock.code !== code) // Don't show the current stock
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ações Similares</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <div className="flex gap-4">
            {similarStocks.map((stock) => (
              <Card key={stock.code} className="min-w-[200px] flex-none">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium">{stock.code}</h4>
                      <p className="text-sm text-muted-foreground">{stock.name}</p>
                    </div>
                    <div>
                      <div className="font-medium">
                        {stock.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                      <p className={`text-sm ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {stock.change > 0 ? "+" : ""}
                        {stock.change}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

