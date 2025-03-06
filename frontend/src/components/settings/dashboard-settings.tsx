"use client"

import { useState } from "react"
import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Label } from "@/src/components/ui/label"
import { Switch } from "@/src/components/ui/switch"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Separator } from "@/src/components/ui/separator"
import { useToast } from "@/src/components/ui/use-toast"

const defaultWidgets = [
  {
    id: "portfolio-summary",
    name: "Resumo da Carteira",
    enabled: true,
    position: 1,
  },
  {
    id: "portfolio-chart",
    name: "Gráfico de Evolução",
    enabled: true,
    position: 2,
  },
  {
    id: "asset-allocation",
    name: "Alocação de Ativos",
    enabled: true,
    position: 3,
  },
  {
    id: "recent-transactions",
    name: "Transações Recentes",
    enabled: true,
    position: 4,
  },
  {
    id: "dividend-calendar",
    name: "Calendário de Proventos",
    enabled: true,
    position: 5,
  },
  {
    id: "market-overview",
    name: "Visão Geral do Mercado",
    enabled: true,
    position: 6,
  },
]

export function DashboardSettings() {
  const [widgets, setWidgets] = useState(defaultWidgets)
  const [defaultCurrency, setDefaultCurrency] = useState("BRL")
  const [defaultTimeframe, setDefaultTimeframe] = useState("1M")
  const { toast } = useToast()

  const handleWidgetToggle = (widgetId: string, enabled: boolean) => {
    setWidgets((prev) => prev.map((widget) => (widget.id === widgetId ? { ...widget, enabled } : widget)))
  }

  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "As configurações do dashboard foram atualizadas com sucesso.",
    })
  }

  const moveWidget = (id: string, direction: "up" | "down") => {
    setWidgets((prev) => {
      const index = prev.findIndex((w) => w.id === id)
      if ((direction === "up" && index === 0) || (direction === "down" && index === prev.length - 1)) {
        return prev
      }

      const newWidgets = [...prev]
      const offset = direction === "up" ? -1 : 1
      const widget = newWidgets[index]
      newWidgets[index] = newWidgets[index + offset]
      newWidgets[index + offset] = widget

      return newWidgets.map((w, i) => ({ ...w, position: i + 1 }))
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Widgets do Dashboard</CardTitle>
          <CardDescription>Personalize quais widgets aparecem no seu dashboard e sua ordem</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {widgets.map((widget) => (
              <div key={widget.id} className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => moveWidget(widget.id, "up")}
                      disabled={widget.position === 1}
                    >
                      ↑
                    </Button>
                    <DragHandleDots2Icon className="h-4 w-4 text-muted-foreground" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => moveWidget(widget.id, "down")}
                      disabled={widget.position === widgets.length}
                    >
                      ↓
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-base">{widget.name}</Label>
                    <p className="text-sm text-muted-foreground">Posição: {widget.position}</p>
                  </div>
                </div>
                <Switch
                  checked={widget.enabled}
                  onCheckedChange={(checked) => handleWidgetToggle(widget.id, checked)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferências de Visualização</CardTitle>
          <CardDescription>Configure as opções padrão de visualização do dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Moeda Padrão</Label>
              <Select value={defaultCurrency} onValueChange={setDefaultCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a moeda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BRL">Real (BRL)</SelectItem>
                  <SelectItem value="USD">Dólar (USD)</SelectItem>
                  <SelectItem value="EUR">Euro (EUR)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Período Padrão</Label>
              <Select value={defaultTimeframe} onValueChange={setDefaultTimeframe}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1D">1 Dia</SelectItem>
                  <SelectItem value="1W">1 Semana</SelectItem>
                  <SelectItem value="1M">1 Mês</SelectItem>
                  <SelectItem value="3M">3 Meses</SelectItem>
                  <SelectItem value="6M">6 Meses</SelectItem>
                  <SelectItem value="1Y">1 Ano</SelectItem>
                  <SelectItem value="YTD">Ano atual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Atualização Automática</Label>
                <p className="text-sm text-muted-foreground">Atualizar dados automaticamente a cada minuto</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Mostrar Variações</Label>
                <p className="text-sm text-muted-foreground">Exibir variações percentuais e valores absolutos</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações no Dashboard</Label>
                <p className="text-sm text-muted-foreground">Exibir alertas e notificações importantes</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Limite de Alerta de Variação (%)</Label>
              <Input type="number" placeholder="5" defaultValue="5" />
              <p className="text-sm text-muted-foreground">Destacar variações acima deste percentual</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Salvar Alterações</Button>
      </div>
    </div>
  )
}

