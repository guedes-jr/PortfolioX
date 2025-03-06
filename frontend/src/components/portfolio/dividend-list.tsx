"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

type Dividend = {
  id: string
  stock: string
  type: "Dividendo" | "JCP" | "Rendimento"
  amount: number
  paymentDate: string
  declaredDate: string
  baseDate: string
}

const dividends: Dividend[] = [
  {
    id: "1",
    stock: "PETR4",
    type: "Dividendo",
    amount: 2.75,
    paymentDate: "2024-03-15",
    declaredDate: "2024-02-28",
    baseDate: "2024-03-01",
  },
  {
    id: "2",
    stock: "ITUB4",
    type: "JCP",
    amount: 0.85,
    paymentDate: "2024-03-20",
    declaredDate: "2024-02-25",
    baseDate: "2024-02-28",
  },
  {
    id: "3",
    stock: "HGLG11",
    type: "Rendimento",
    amount: 0.92,
    paymentDate: "2024-03-10",
    declaredDate: "2024-02-28",
    baseDate: "2024-03-01",
  },
  {
    id: "4",
    stock: "VALE3",
    type: "Dividendo",
    amount: 1.45,
    paymentDate: "2024-03-25",
    declaredDate: "2024-03-01",
    baseDate: "2024-03-05",
  },
]

export function DividendList() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR")
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Proventos</CardTitle>
        <CardDescription>Lista de proventos declarados e recebidos</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ativo</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead className="text-right">Valor por Ação</TableHead>
              <TableHead>Data Base</TableHead>
              <TableHead>Data Pagamento</TableHead>
              <TableHead>Data Declaração</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dividends.map((dividend) => (
              <TableRow key={dividend.id}>
                <TableCell className="font-medium">{dividend.stock}</TableCell>
                <TableCell>{dividend.type}</TableCell>
                <TableCell className="text-right">{formatCurrency(dividend.amount)}</TableCell>
                <TableCell>{formatDate(dividend.baseDate)}</TableCell>
                <TableCell>{formatDate(dividend.paymentDate)}</TableCell>
                <TableCell>{formatDate(dividend.declaredDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

