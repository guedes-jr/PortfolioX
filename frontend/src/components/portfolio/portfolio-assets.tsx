"use client"

import { useState } from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { Card, CardContent } from "@/src/components/ui/card"
import { ScrollArea } from "@/src/components/ui/scroll-area"

type Asset = {
  id: string
  name: string
  ticker: string
  quantity: number
  price: number
  totalValue: number
  change: number
  averagePrice: number
  result: number
}

type AssetGroup = {
  type: string
  total: number
  change: number
  assets: Asset[]
}

const portfolioData: AssetGroup[] = [
  {
    type: "Ações Brasileiras",
    total: 45250.8,
    change: 2.5,
    assets: [
      {
        id: "1",
        name: "Petrobras",
        ticker: "PETR4",
        quantity: 100,
        price: 35.82,
        totalValue: 3582.0,
        change: 1.25,
        averagePrice: 32.5,
        result: 10.22,
      },
      {
        id: "2",
        name: "Vale",
        ticker: "VALE3",
        quantity: 150,
        price: 68.9,
        totalValue: 10335.0,
        change: -0.8,
        averagePrice: 65.2,
        result: 5.67,
      },
      {
        id: "3",
        name: "Itaú Unibanco",
        ticker: "ITUB4",
        quantity: 200,
        price: 32.54,
        totalValue: 6508.0,
        change: 0.5,
        averagePrice: 30.1,
        result: 8.11,
      },
    ],
  },
  {
    type: "Fundos Imobiliários",
    total: 25680.45,
    change: -0.3,
    assets: [
      {
        id: "4",
        name: "CSHG Logística",
        ticker: "HGLG11",
        quantity: 50,
        price: 156.78,
        totalValue: 7839.0,
        change: -0.5,
        averagePrice: 150.2,
        result: 4.38,
      },
      {
        id: "5",
        name: "BTG Pactual Corporate Office",
        ticker: "BRCR11",
        quantity: 80,
        price: 71.25,
        totalValue: 5700.0,
        change: 0.8,
        averagePrice: 68.9,
        result: 3.41,
      },
    ],
  },
  {
    type: "Renda Fixa",
    total: 35845.9,
    change: 0.15,
    assets: [
      {
        id: "6",
        name: "Tesouro IPCA+ 2026",
        ticker: "TD-IPCA-2026",
        quantity: 1,
        price: 5234.56,
        totalValue: 5234.56,
        change: 0.15,
        averagePrice: 5000.0,
        result: 4.69,
      },
      {
        id: "7",
        name: "CDB Banco XYZ",
        ticker: "CDB-XYZ",
        quantity: 1,
        price: 10000.0,
        totalValue: 10000.0,
        change: 0.12,
        averagePrice: 10000.0,
        result: 8.5,
      },
    ],
  },
]

export function PortfolioAssets() {
  const [openGroups, setOpenGroups] = useState<string[]>([portfolioData[0].type])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`
  }

  return (
    <ScrollArea className="h-[600px] rounded-md border">
      <div className="p-4">
        <Accordion type="multiple" value={openGroups} onValueChange={setOpenGroups} className="space-y-4">
          {portfolioData.map((group) => (
            <AccordionItem key={group.type} value={group.type} className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-1 items-center justify-between pr-4">
                  <div>
                    <h3 className="text-lg font-semibold">{group.type}</h3>
                    <p className="text-sm text-muted-foreground">{group.assets.length} ativos</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">{formatCurrency(group.total)}</div>
                    <div className={`text-sm ${group.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {formatPercentage(group.change)}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-4">
                  {group.assets.map((asset) => (
                    <Card key={asset.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{asset.ticker}</span>
                              {asset.change >= 0 ? (
                                <TrendingUp className="h-4 w-4 text-green-500" />
                              ) : (
                                <TrendingDown className="h-4 w-4 text-red-500" />
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">{asset.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{formatCurrency(asset.totalValue)}</div>
                            <div className={`text-sm ${asset.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                              {formatPercentage(asset.change)}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Quantidade:</span>
                            <span className="ml-2 font-medium">{asset.quantity}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Preço Atual:</span>
                            <span className="ml-2 font-medium">{formatCurrency(asset.price)}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Preço Médio:</span>
                            <span className="ml-2 font-medium">{formatCurrency(asset.averagePrice)}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Resultado:</span>
                            <span
                              className={`ml-2 font-medium ${asset.result >= 0 ? "text-green-500" : "text-red-500"}`}
                            >
                              {formatPercentage(asset.result)}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollArea>
  )
}

