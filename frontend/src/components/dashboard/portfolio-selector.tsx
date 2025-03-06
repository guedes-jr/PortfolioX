"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

type Portfolio = {
  id: string
  name: string
  balance: number
  performance: number
}

const mockPortfolios: Portfolio[] = [
  {
    id: "1",
    name: "Carteira Principal",
    balance: 50000,
    performance: 12.5,
  },
  {
    id: "2",
    name: "Carteira de Dividendos",
    balance: 25000,
    performance: 8.3,
  },
]

export function PortfolioSelector() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Selecione a Carteira</CardTitle>
      </CardHeader>
      <CardContent>
        <Select defaultValue={mockPortfolios[0].id}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma carteira" />
          </SelectTrigger>
          <SelectContent>
            {mockPortfolios.map((portfolio) => (
              <SelectItem key={portfolio.id} value={portfolio.id}>
                {portfolio.name} - R$ {portfolio.balance.toLocaleString("pt-BR")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

