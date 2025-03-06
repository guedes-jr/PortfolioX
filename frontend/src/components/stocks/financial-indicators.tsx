import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"

interface FinancialIndicatorsProps {
  code: string
}

const indicators = [
  { name: "P/L", value: "8.5", description: "Preço/Lucro" },
  { name: "P/VP", value: "1.2", description: "Preço/Valor Patrimonial" },
  { name: "P/EBIT", value: "3.8", description: "Preço/EBIT" },
  { name: "PSR", value: "1.1", description: "Preço/Receita" },
  { name: "DY", value: "12.5%", description: "Dividend Yield" },
  { name: "ROE", value: "25.8%", description: "Retorno sobre Patrimônio" },
  { name: "ROA", value: "15.2%", description: "Retorno sobre Ativos" },
  { name: "ROIC", value: "18.9%", description: "Retorno sobre Capital Investido" },
]

export function FinancialIndicators({ code }: FinancialIndicatorsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Indicadores Fundamentalistas</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Indicador</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead className="hidden md:table-cell">Descrição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {indicators.map((indicator) => (
              <TableRow key={indicator.name}>
                <TableCell className="font-medium">{indicator.name}</TableCell>
                <TableCell>{indicator.value}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{indicator.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

