"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

const data = [
  {
    date: "Jan",
    PETR4: 32.5,
    VALE3: 65.2,
    ITUB4: 30.1,
  },
  {
    date: "Fev",
    PETR4: 33.8,
    VALE3: 67.9,
    ITUB4: 31.25,
  },
  {
    date: "Mar",
    PETR4: 34.2,
    VALE3: 66.5,
    ITUB4: 31.8,
  },
  {
    date: "Abr",
    PETR4: 35.1,
    VALE3: 68.3,
    ITUB4: 32.15,
  },
  {
    date: "Mai",
    PETR4: 35.5,
    VALE3: 69.1,
    ITUB4: 32.4,
  },
  {
    date: "Jun",
    PETR4: 35.82,
    VALE3: 68.9,
    ITUB4: 32.54,
  },
]

export function AssetComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparação de Ativos</CardTitle>
        <CardDescription>Desempenho comparativo dos últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
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
                              <p className="text-sm font-medium">{payload[0].payload.date}</p>
                              {payload.map((item: any) => (
                                <div key={item.dataKey} className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">{item.dataKey}:</span>
                                  <span className="font-medium">R$ {item.value.toFixed(2)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="PETR4" stroke="#0088FE" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="VALE3" stroke="#00C49F" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="ITUB4" stroke="#FFBB28" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#0088FE]" />
            <span className="text-sm">PETR4</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#00C49F]" />
            <span className="text-sm">VALE3</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FFBB28]" />
            <span className="text-sm">ITUB4</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

