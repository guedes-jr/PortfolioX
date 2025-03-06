"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Button } from "@/src/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"

type Result = {
  totalInvested: number
  totalInterest: number
  finalAmount: number
  monthlyResults: Array<{
    month: number
    invested: number
    interest: number
    total: number
  }>
}

export function CompoundInterestCalculator() {
  const [initialAmount, setInitialAmount] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [period, setPeriod] = useState("")
  const [periodType, setPeriodType] = useState("years")
  const [result, setResult] = useState<Result | null>(null)

  const calculateCompoundInterest = () => {
    const initial = Number(initialAmount) || 0
    const monthly = Number(monthlyContribution) || 0
    const rate = Number(interestRate) || 0
    const months = Number(period) * (periodType === "years" ? 12 : 1)

    let totalInvested = initial
    let currentAmount = initial
    const monthlyResults = []

    const monthlyRate = rate / 100 / 12

    for (let i = 1; i <= months; i++) {
      currentAmount = (currentAmount + monthly) * (1 + monthlyRate)
      totalInvested += monthly

      monthlyResults.push({
        month: i,
        invested: totalInvested,
        interest: currentAmount - totalInvested,
        total: currentAmount,
      })
    }

    setResult({
      totalInvested,
      totalInterest: currentAmount - totalInvested,
      finalAmount: currentAmount,
      monthlyResults,
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculadora de Juros Compostos
        </CardTitle>
        <CardDescription>Calcule o rendimento dos seus investimentos ao longo do tempo</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="initialAmount">Valor Inicial</Label>
            <Input
              id="initialAmount"
              type="number"
              placeholder="R$ 0,00"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyContribution">Aporte Mensal</Label>
            <Input
              id="monthlyContribution"
              type="number"
              placeholder="R$ 0,00"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Taxa de Juros (% ao ano)</Label>
            <Input
              id="interestRate"
              type="number"
              placeholder="0%"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="period">Período</Label>
              <Input
                id="period"
                type="number"
                placeholder="0"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="periodType">Tipo</Label>
              <Select value={periodType} onValueChange={setPeriodType}>
                <SelectTrigger id="periodType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="years">Anos</SelectItem>
                  <SelectItem value="months">Meses</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Button className="w-full" onClick={calculateCompoundInterest}>
          Calcular
        </Button>

        {result && (
          <div className="space-y-6 pt-4 border-t">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">{formatCurrency(result.totalInvested)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">Juros Acumulados</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold text-green-500">{formatCurrency(result.totalInterest)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">Montante Final</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">{formatCurrency(result.finalAmount)}</div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Período</th>
                    <th className="p-2 text-right">Investido</th>
                    <th className="p-2 text-right">Juros</th>
                    <th className="p-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {result.monthlyResults
                    .filter((_, index) => (periodType === "years" ? (index + 1) % 12 === 0 : true))
                    .map((row) => (
                      <tr key={row.month} className="border-b last:border-0">
                        <td className="p-2">
                          {periodType === "years" ? `Ano ${Math.ceil(row.month / 12)}` : `Mês ${row.month}`}
                        </td>
                        <td className="p-2 text-right">{formatCurrency(row.invested)}</td>
                        <td className="p-2 text-right text-green-500">{formatCurrency(row.interest)}</td>
                        <td className="p-2 text-right font-medium">{formatCurrency(row.total)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

