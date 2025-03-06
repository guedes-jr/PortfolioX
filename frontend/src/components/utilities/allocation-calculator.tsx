"use client"

import { useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Percent, PieChartIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Alert, AlertDescription } from "@/src/components/ui/alert"

type AssetAllocation = {
  type: string
  percentage: number
  color: string
}

const initialAllocations: AssetAllocation[] = [
  { type: "Renda Variável", percentage: 40, color: "#0088FE" },
  { type: "Renda Fixa", percentage: 30, color: "#00C49F" },
  { type: "Fundos Imobiliários", percentage: 20, color: "#FFBB28" },
  { type: "Criptomoedas", percentage: 10, color: "#FF8042" },
]

export function AllocationCalculator() {
  const [totalAmount, setTotalAmount] = useState("")
  const [allocations, setAllocations] = useState(initialAllocations)
  const [error, setError] = useState("")

  const updateAllocation = (index: number, value: number) => {
    const newAllocations = [...allocations]
    newAllocations[index] = {
      ...newAllocations[index],
      percentage: value,
    }
    setAllocations(newAllocations)
  }

  useEffect(() => {
    const total = allocations.reduce((sum, item) => sum + item.percentage, 0)
    if (total !== 100) {
      setError(`A soma das alocações deve ser 100%. Atual: ${total}%`)
    } else {
      setError("")
    }
  }, [allocations])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const calculateAllocation = (percentage: number) => {
    const amount = Number(totalAmount.replace(/[^0-9.-]+/g, "")) || 0
    return (amount * percentage) / 100
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChartIcon className="h-5 w-5" />
          Calculadora de Aporte
        </CardTitle>
        <CardDescription>
          Calcule o valor a ser investido em cada tipo de ativo de acordo com sua alocação ideal
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="totalAmount">Valor Total do Aporte</Label>
          <Input
            id="totalAmount"
            type="text"
            placeholder="R$ 0,00"
            value={totalAmount}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "")
              const formatted = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(value) / 100)
              setTotalAmount(formatted)
            }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-medium">Definir Alocação (%)</h3>
            {allocations.map((allocation, index) => (
              <div key={allocation.type} className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: allocation.color }} />
                <div className="flex-1">
                  <Label htmlFor={`allocation-${index}`}>{allocation.type}</Label>
                </div>
                <div className="w-24 relative">
                  <Input
                    id={`allocation-${index}`}
                    type="number"
                    value={allocation.percentage}
                    onChange={(e) => updateAllocation(index, Number(e.target.value))}
                  />
                  <Percent className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            ))}

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocations}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="percentage"
                >
                  {allocations.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as AssetAllocation
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid gap-2">
                            <div className="flex items-center">
                              <div className="w-full space-y-1">
                                <p className="text-sm font-medium">{data.type}</p>
                                <p className="text-sm text-muted-foreground">{data.percentage}%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {!error && Number(totalAmount.replace(/[^0-9.-]+/g, "")) > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Valores por Tipo de Ativo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allocations.map((allocation) => (
                  <div key={allocation.type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: allocation.color }} />
                      <span>{allocation.type}</span>
                    </div>
                    <div className="font-medium">{formatCurrency(calculateAllocation(allocation.percentage))}</div>
                  </div>
                ))}
                <div className="pt-4 border-t flex items-center justify-between font-bold">
                  <span>Total</span>
                  <span>{totalAmount}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

