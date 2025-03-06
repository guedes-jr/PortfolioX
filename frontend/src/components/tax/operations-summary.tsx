import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

type Operation = {
  id: string
  date: string
  type: "Compra" | "Venda"
  asset: string
  quantity: number
  price: number
  total: number
  operationType: "Swing Trade" | "Day Trade"
}

const operations: Operation[] = [
  {
    id: "1",
    date: "2024-02-25",
    type: "Compra",
    asset: "PETR4",
    quantity: 100,
    price: 35.82,
    total: 3582.0,
    operationType: "Swing Trade",
  },
  {
    id: "2",
    date: "2024-02-25",
    type: "Venda",
    asset: "VALE3",
    quantity: 50,
    price: 68.9,
    total: 3445.0,
    operationType: "Day Trade",
  },
]

export function OperationsSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo de Operações</CardTitle>
        <CardDescription>Operações realizadas no mês atual</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="swing">Swing Trade</TabsTrigger>
            <TabsTrigger value="day">Day Trade</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <OperationsTable operations={operations} />
          </TabsContent>
          <TabsContent value="swing">
            <OperationsTable operations={operations.filter((op) => op.operationType === "Swing Trade")} />
          </TabsContent>
          <TabsContent value="day">
            <OperationsTable operations={operations.filter((op) => op.operationType === "Day Trade")} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function OperationsTable({ operations }: { operations: Operation[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Ativo</TableHead>
          <TableHead className="text-right">Quantidade</TableHead>
          <TableHead className="text-right">Preço</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead>Operação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {operations.map((operation) => (
          <TableRow key={operation.id}>
            <TableCell>{new Date(operation.date).toLocaleDateString("pt-BR")}</TableCell>
            <TableCell>{operation.type}</TableCell>
            <TableCell className="font-medium">{operation.asset}</TableCell>
            <TableCell className="text-right">{operation.quantity}</TableCell>
            <TableCell className="text-right">
              {operation.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </TableCell>
            <TableCell className="text-right">
              {operation.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </TableCell>
            <TableCell>{operation.operationType}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

