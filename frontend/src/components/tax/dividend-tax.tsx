import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"

type DividendTaxEntry = {
  id: string
  month: string
  dividends: number
  jcp: number
  fii: number
  reit: number
  totalTaxable: number
  totalTaxFree: number
}

const dividendTaxData: DividendTaxEntry[] = [
  {
    id: "1",
    month: "Janeiro/2024",
    dividends: 2500.0,
    jcp: 1500.0,
    fii: 800.0,
    reit: 200.0,
    totalTaxable: 1500.0,
    totalTaxFree: 3500.0,
  },
  {
    id: "2",
    month: "Fevereiro/2024",
    dividends: 2000.0,
    jcp: 1200.0,
    fii: 900.0,
    reit: 300.0,
    totalTaxable: 1200.0,
    totalTaxFree: 3200.0,
  },
]

export function DividendTax() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tributação de Proventos</CardTitle>
        <CardDescription>Resumo de proventos recebidos e sua tributação</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Período</TableHead>
              <TableHead className="text-right">Dividendos</TableHead>
              <TableHead className="text-right">JCP</TableHead>
              <TableHead className="text-right">FIIs</TableHead>
              <TableHead className="text-right">REITs</TableHead>
              <TableHead className="text-right">Total Tributável</TableHead>
              <TableHead className="text-right">Total Isento</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dividendTaxData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.month}</TableCell>
                <TableCell className="text-right">
                  {entry.dividends.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {entry.jcp.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {entry.fii.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {entry.reit.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right text-red-500 font-medium">
                  {entry.totalTaxable.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right text-green-500 font-medium">
                  {entry.totalTaxFree.toLocaleString("pt-BR", {
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

