"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

type DividendEvent = {
  id: string
  stock: string
  type: string
  amount: number
  paymentDate: string
}

const dividendEvents: DividendEvent[] = [
  {
    id: "1",
    stock: "PETR4",
    type: "Dividendo",
    amount: 2.75,
    paymentDate: "2024-03-15",
  },
  {
    id: "2",
    stock: "ITUB4",
    type: "JCP",
    amount: 0.85,
    paymentDate: "2024-03-20",
  },
  {
    id: "3",
    stock: "HGLG11",
    type: "Rendimento",
    amount: 0.92,
    paymentDate: "2024-03-10",
  },
  {
    id: "4",
    stock: "VALE3",
    type: "Dividendo",
    amount: 1.45,
    paymentDate: "2024-03-25",
  },
]

export function DividendCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getDividendsForDay = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return dividendEvents.filter((event) => new Date(event.paymentDate).toDateString() === date.toDateString())
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

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

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
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
                title={`${dividend.stock} - ${formatCurrency(dividend.amount)}`}
              >
                {dividend.stock} - {formatCurrency(dividend.amount)}
              </div>
            ))}
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Calendário de Proventos</CardTitle>
            <CardDescription>Visualize os proventos por data de pagamento</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={previousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="font-medium min-w-[120px] text-center">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-px">
          {weekDays.map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium">
              {day}
            </div>
          ))}
          {renderCalendar()}
        </div>
      </CardContent>
    </Card>
  )
}

