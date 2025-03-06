"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

const data = [
  {
    name: "Jan",
    total: 1000,
  },
  {
    name: "Fev",
    total: 1200,
  },
  {
    name: "Mar",
    total: 900,
  },
  {
    name: "Abr",
    total: 1600,
  },
  {
    name: "Mai",
    total: 1800,
  },
  {
    name: "Jun",
    total: 1400,
  },
]

export function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução Patrimonial</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `R$${value}`}
              />
              <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

