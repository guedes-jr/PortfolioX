"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

const data = [
  { date: "Jan", value: 40000 },
  { date: "Fev", value: 42000 },
  { date: "Mar", value: 41500 },
  { date: "Abr", value: 44000 },
  { date: "Mai", value: 46000 },
  { date: "Jun", value: 48000 },
  { date: "Jul", value: 47500 },
  { date: "Ago", value: 51000 },
  { date: "Set", value: 52500 },
  { date: "Out", value: 54000 },
  { date: "Nov", value: 53500 },
  { date: "Dez", value: 54231.89 },
]

const periods = [
  { label: "1M", value: "1m" },
  { label: "3M", value: "3m" },
  { label: "6M", value: "6m" },
  { label: "1A", value: "1y" },
  { label: "Tudo", value: "all" },
]

export function PortfolioChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Evolução Patrimonial</CardTitle>
        <div className="flex items-center gap-2">
          {periods.map((period) => (
            <Button key={period.value} variant={period.value === "1y" ? "secondary" : "ghost"} size="sm">
              {period.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `R$ ${value.toLocaleString()}`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Data</span>
                            <span className="font-bold">{payload[0].payload.date}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Valor</span>
                            <span className="font-bold">R$ {payload[0].value.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

