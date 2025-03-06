import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

const transactions = [
  {
    id: 1,
    asset: "PETR4",
    type: "buy",
    amount: 100,
    price: 32.54,
    date: "2024-02-22",
  },
  {
    id: 2,
    asset: "VALE3",
    type: "sell",
    amount: 50,
    price: 68.9,
    date: "2024-02-21",
  },
  {
    id: 3,
    asset: "ITUB4",
    type: "buy",
    amount: 200,
    price: 28.75,
    date: "2024-02-20",
  },
  {
    id: 4,
    asset: "BBDC4",
    type: "buy",
    amount: 150,
    price: 15.32,
    date: "2024-02-19",
  },
]

export function RecentTransactions() {
  return (
    <Card className="col-span-2 md:col-span-1">
      <CardHeader>
        <CardTitle>Últimas Transações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <div
                className={`mr-4 rounded-full p-2 ${
                  transaction.type === "buy" ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"
                }`}
              >
                {transaction.type === "buy" ? (
                  <ArrowUpRight
                    className={`h-4 w-4 ${transaction.type === "buy" ? "text-green-500" : "text-red-500"}`}
                  />
                ) : (
                  <ArrowDownRight
                    className={`h-4 w-4 ${transaction.type === "buy" ? "text-green-500" : "text-red-500"}`}
                  />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{transaction.asset}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString("pt-BR")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">
                  {transaction.amount} {transaction.type === "buy" ? "compra" : "venda"}
                </p>
                <p className="text-sm text-muted-foreground">R$ {transaction.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

