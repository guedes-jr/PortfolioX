type MonthCalendarProps = {
  type: "stocks" | "reits" | "us-stocks"
  date: Date
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
      paymentDate: "2024-03-20",
      type: "JCP",
    },
  ],
  reits: [
    {
      id: "3",
      asset: "HGLG11",
      amount: 0.92,
      paymentDate: "2024-03-10",
      type: "Rendimento",
    },
    {
      id: "4",
      asset: "XPLG11",
      amount: 0.75,
      paymentDate: "2024-03-15",
      type: "Rendimento",
    },
  ],
  "us-stocks": [
    {
      id: "5",
      asset: "AAPL",
      amount: 0.24,
      paymentDate: "2024-03-14",
      type: "Dividend",
    },
  ],
}

export function MonthCalendar({ type, date }: MonthCalendarProps) {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getDividendsForDay = (day: number) => {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), day)
    return (
      mockDividends[type]?.filter(
        (event) => new Date(event.paymentDate).toDateString() === currentDate.toDateString(),
      ) || []
    )
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(date)
    const firstDay = getFirstDayOfMonth(date)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-border/50" />)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dividends = getDividendsForDay(day)
      days.push(
        <div key={day} className={`h-24 border border-border/50 p-1 ${dividends.length > 0 ? "bg-primary/5" : ""}`}>
          <div className="font-medium text-sm">{day}</div>
          <div className="space-y-1">
            {dividends.map((dividend) => (
              <div
                key={dividend.id}
                className="text-xs p-1 rounded-sm bg-primary/10 truncate"
                title={`${dividend.asset} - ${dividend.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}`}
              >
                {dividend.asset} -{" "}
                {dividend.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            ))}
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="grid grid-cols-7 gap-px">
      {weekDays.map((day) => (
        <div key={day} className="p-2 text-center text-sm font-medium">
          {day}
        </div>
      ))}
      {renderCalendar()}
    </div>
  )
}

