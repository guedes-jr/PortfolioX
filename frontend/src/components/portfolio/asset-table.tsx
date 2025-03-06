import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

const assets = [
  {
    name: "PETR4",
    type: "Ações BR",
    quantity: 100,
    price: 35.82,
    total: 3582.0,
    change: 1.25,
  },
  {
    name: "AAPL",
    type: "Ações EUA",
    quantity: 10,
    price: 175.84,
    total: 1758.4,
    change: 0.8,
  },
  {
    name: "Tesouro IPCA+",
    type: "Tesouro Direto",
    quantity: 1,
    price: 5234.56,
    total: 5234.56,
    change: 0.15,
  },
  {
    name: "HGLG11",
    type: "FIIs",
    quantity: 50,
    price: 156.78,
    total: 7839.0,
    change: -0.5,
  },
]

export function AssetTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ativos da Carteira</CardTitle>
        <CardDescription>Lista detalhada dos ativos por classificação</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ativo</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Var.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.name}>
                <TableCell className="font-medium">{asset.name}</TableCell>
                <TableCell>{asset.type}</TableCell>
                <TableCell className="text-right">{asset.quantity}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(asset.price)}
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(asset.total)}
                </TableCell>
                <TableCell className={`text-right ${asset.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {asset.change > 0 ? "+" : ""}
                  {asset.change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

