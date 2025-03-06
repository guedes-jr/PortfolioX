"use client"

import { useState } from "react"
import { CalendarDays, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { MonthCalendar } from "@/src/components/dividends/month-calendar"
import { YearCalendar } from "@/src/components/dividends/year-calendar"
import { DividendsSummary } from "@/src/components/dividends/dividends-summary"

type AssetType = "stocks" | "reits" | "us-stocks"
type ViewType = "month" | "year"

const assetTypes = {
  stocks: {
    label: "Ações",
    description: "Ações brasileiras",
  },
  reits: {
    label: "FIIs",
    description: "Fundos de Investimento Imobiliário",
  },
  "us-stocks": {
    label: "Stocks",
    description: "Ações americanas",
  },
}

export function DividendsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedType, setSelectedType] = useState<AssetType>("stocks")
  const [view, setView] = useState<ViewType>("month")

  const nextPeriod = () => {
    if (view === "month") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
    } else {
      setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth()))
    }
  }

  const previousPeriod = () => {
    if (view === "month") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
    } else {
      setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth()))
    }
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

  return (
    <div className="space-y-6">
      <DividendsSummary type={selectedType} date={currentDate} />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-medium">Calendário de Pagamentos</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border rounded-lg p-1">
              <Button
                variant={view === "month" ? "secondary" : "ghost"}
                size="sm"
                className="px-3"
                onClick={() => setView("month")}
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                Mensal
              </Button>
              <Button
                variant={view === "year" ? "secondary" : "ghost"}
                size="sm"
                className="px-3"
                onClick={() => setView("year")}
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                Anual
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={previousPeriod}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="min-w-[140px] text-center font-medium">
                {view === "month"
                  ? `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                  : currentDate.getFullYear()}
              </div>
              <Button variant="outline" size="icon" onClick={nextPeriod}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="stocks"
            className="space-y-4"
            onValueChange={(value) => setSelectedType(value as AssetType)}
          >
            <TabsList>
              {Object.entries(assetTypes).map(([key, { label }]) => (
                <TabsTrigger key={key} value={key}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.keys(assetTypes).map((type) => (
              <TabsContent key={type} value={type}>
                {view === "month" ? (
                  <MonthCalendar type={type as AssetType} date={currentDate} />
                ) : (
                  <YearCalendar type={type as AssetType} year={currentDate.getFullYear()} />
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

