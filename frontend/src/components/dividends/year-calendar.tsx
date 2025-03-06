type YearCalendarProps = {
  type: "stocks" | "reits" | "us-stocks"
  year: number
}

type DividendEvent = {
  id: string
  asset: string
  amount: number
  paymentDate: string
  type: string
}

// Mock data - replace with real data
const mockDividends: Record<string, DividendEvent[]> = {
  stocks: [
    {
      id: "1",
      asset: "PETR4",
      amount: 2.75,
      paymentDate: "2024-03-15",
      type: "Dividendo",
    },
    {
      id: "2",
      asset: "VALE3",
      amount: 1.85,
      paymentDate: "2024-06-20",
      type: "JCP",
    },
    {
      id: "3",
      asset: "ITUB4",
      amount: 0.92,
      paymentDate: "2024-09-10",
      type: "Dividendo",
    },
  ],
  reits: [
    {
      id: "4",
      asset: "HGLG11",
      amount: 0.92,
      paymentDate: "2024-03-10",
      type: "Rendimento",
    },
    {
      id: "5",
      asset: "XPLG11",
      amount: 0.75,
      paymentDate: "2024-03-15",
      type: "Rendimento",
    },
  ],
  "us-stocks": [
    {
      id: "6",
      asset: "AAPL",
      amount: 0.24,
      paymentDate: "2024-03-14",
      type: "Dividend",
    },
  ],
}

export function YearCalendar({ type, year }: YearCalendarProps) {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const getDividendsForMonth = (month: number) => {
    return (
      mockDividends[type]?.filter((event) => {
        const eventDate = new Date(event.paymentDate)
        return eventDate.getFullYear() === year && eventDate.getMonth() === month
      }) || []
    )
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {monthNames.map((monthName, index) => {
        const dividends = getDividendsForMonth(index)
        const totalAmount = dividends.reduce((sum, div) => sum + div.amount, 0)

        return (
          <div key={monthName} className={`rounded-lg border p-4 ${dividends.length > 0 ? "bg-primary/5" : ""}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">{monthName}</h3>
              {dividends.length > 0 && (
                <span className="text-sm font-medium text-primary">{formatCurrency(totalAmount)}</span>
              )}
            </div>
            <div className="space-y-2">
              {dividends.length === 0 ? (
                <p className="text-sm text-muted-foreground">Nenhum provento</p>
              ) : (
                dividends.map((dividend) => (
                  <div key={dividend.id} className="flex items-center justify-between text-sm">
                    <span className="font-medium">{dividend.asset}</span>
                    <span className="text-muted-foreground">{formatCurrency(dividend.amount)}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

