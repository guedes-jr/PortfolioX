import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"

type TaxLoss = {
  id: string
  month: string
  swingTradeLoss: number
  dayTradeLoss: number
  compensatedSwing: number
  compensatedDay: number
  remainingSwing: number
  remainingDay: number
}

const taxLosses: TaxLoss[] = [
  {
    id: "1",
    month: "Janeiro/2024",
    swingTradeLoss: 5000.0,
    dayTradeLoss: 2000.0,
    compensatedSwing: 3000.0,
    compensatedDay: 1000.0,
    remainingSwing: 2000.0,
    remainingDay: 1000.0,
  },
  {
    id: "2",
    month: "Fevereiro/2024",
    swingTradeLoss: 3000.0,
    dayTradeLoss: 1500.0,
    compensatedSwing: 1000.0,
    compensatedDay: 500.0,
    remainingSwing: 2000.0,
    remainingDay: 1000.0,
  },
]

export function TaxLosses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prejuízos Fiscais</CardTitle>
        <CardDescription>Controle de prejuízos e compensações</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Período</TableHead>
              <TableHead className="text-right">Prejuízo Swing</TableHead>
              <TableHead className="text-right">Prejuízo Day</TableHead>
              <TableHead className="text-right">Compensado Swing</TableHead>
              <TableHead className="text-right">Compensado Day</TableHead>
              <TableHead className="text-right">Saldo Swing</TableHead>
              <TableHead className="text-right">Saldo Day</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taxLosses.map((loss) => (
              <TableRow key={loss.id}>
                <TableCell>{loss.month}</TableCell>
                <TableCell className="text-right text-red-500">
                  {loss.swingTradeLoss.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right text-red-500">
                  {loss.dayTradeLoss.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right text-green-500">
                  {loss.compensatedSwing.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right text-green-500">
                  {loss.compensatedDay.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {loss.remainingSwing.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {loss.remainingDay.toLocaleString("pt-BR", {
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

