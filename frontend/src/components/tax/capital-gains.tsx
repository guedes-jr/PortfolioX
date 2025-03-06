import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"

type CapitalGain = {
  id: string
  month: string
  swingTradeGain: number
  dayTradeGain: number
  swingTradeTax: number
  dayTradeTax: number
  totalTax: number
}

const capitalGains: CapitalGain[] = [
  {
    id: "1",
    month: "Janeiro/2024",
    swingTradeGain: 15000.0,
    dayTradeGain: 5000.0,
    swingTradeTax: 2250.0,
    dayTradeTax: 1000.0,
    totalTax: 3250.0,
  },
  {
    id: "2",
    month: "Fevereiro/2024",
    swingTradeGain: 12000.0,
    dayTradeGain: 3000.0,
    swingTradeTax: 1800.0,
    dayTradeTax: 600.0,
    totalTax: 2400.0,
  },
]

export function CapitalGains() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ganhos de Capital</CardTitle>
        <CardDescription>Resumo dos ganhos e tributação por período</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Período</TableHead>
              <TableHead className="text-right">Ganhos Swing Trade</TableHead>
              <TableHead className="text-right">Ganhos Day Trade</TableHead>
              <TableHead className="text-right">IRPF Swing (15%)</TableHead>
              <TableHead className="text-right">IRPF Day (20%)</TableHead>
              <TableHead className="text-right">Total IRPF</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {capitalGains.map((gain) => (
              <TableRow key={gain.id}>
                <TableCell>{gain.month}</TableCell>
                <TableCell className="text-right">
                  {gain.swingTradeGain.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {gain.dayTradeGain.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right text-red-500">
                  {gain.swingTradeTax.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right text-red-500">
                  {gain.dayTradeTax.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right font-bold text-red-500">
                  {gain.totalTax.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

