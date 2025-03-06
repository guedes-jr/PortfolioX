"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface DividendHistoryProps {
  code: string
}

const data = [
  { month: "Jul", value: 1.25 },
  { month: "Ago", value: 0 },
  { month: "Set", value: 1.5 },
  { month: "Out", value: 0 },
  { month: "Nov", value: 1.75 },
  { month: "Dez", value: 2.75 },
]

export function DividendHistory({ code }: DividendHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Dividendos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `R$ ${value}`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex items-center">
                            <div className="w-full space-y-1">
                              <p className="text-sm font-medium">{payload[0].payload.month}</p>
                              <p className="text-sm text-muted-foreground">
                                {payload[0].value.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

