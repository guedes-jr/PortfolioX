"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Switch } from "@/src/components/ui/switch"
import { useToast } from "@/src/components/ui/use-toast"

export function PortfolioSettings() {
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSaving(false)
    toast({
      title: "Configurações salvas",
      description: "As configurações da carteira foram atualizadas",
    })
  }

  return (
    <form onSubmit={handleSave}>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configurações Gerais</CardTitle>
            <CardDescription>Configure as preferências gerais da sua carteira</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Moeda Principal</Label>
                <Select defaultValue="BRL">
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
                <Label>Formato de Data</Label>
                <Select defaultValue="dd/mm/yyyy">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o formato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Fuso Horário</Label>
                <Select defaultValue="America/Sao_Paulo">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o fuso horário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="America/Sao_Paulo">Brasília (GMT-3)</SelectItem>
                    <SelectItem value="America/New_York">Nova York (GMT-4)</SelectItem>
                    <SelectItem value="Europe/London">Londres (GMT+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Casas Decimais</Label>
                <Select defaultValue="2">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione as casas decimais" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 casas decimais</SelectItem>
                    <SelectItem value="3">3 casas decimais</SelectItem>
                    <SelectItem value="4">4 casas decimais</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Critérios de Avaliação de Ativos</h3>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Nota Excelente (Verde)</Label>
                    <Select defaultValue="4">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a nota mínima" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 estrelas ou mais</SelectItem>
                        <SelectItem value="4">4 estrelas ou mais</SelectItem>
                        <SelectItem value="5">5 estrelas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Nota Regular (Amarelo)</Label>
                    <Select defaultValue="2.5">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a nota mínima" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 estrelas ou mais</SelectItem>
                        <SelectItem value="2.5">2.5 estrelas ou mais</SelectItem>
                        <SelectItem value="3">3 estrelas ou mais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Mostrar Notas</Label>
                    <p className="text-sm text-muted-foreground">Exibir notas dos ativos no dashboard</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Atualização Automática</Label>
                  <p className="text-sm text-muted-foreground">Atualizar cotações automaticamente</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Consolidar Carteiras</Label>
                  <p className="text-sm text-muted-foreground">Mostrar visão consolidada de todas as carteiras</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limites e Alertas</CardTitle>
            <CardDescription>Configure limites para receber alertas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Alerta de Variação (%)</Label>
                <Input type="number" placeholder="5" defaultValue="5" />
              </div>
              <div className="space-y-2">
                <Label>Alerta de Volume</Label>
                <Input type="number" placeholder="1000000" defaultValue="1000000" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Alertas de Dividendos</Label>
                  <p className="text-sm text-muted-foreground">Notificar sobre anúncios de dividendos</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Alertas de Preço</Label>
                  <p className="text-sm text-muted-foreground">Notificar quando atingir preço alvo</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={isSaving}>
            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Salvar Configurações
          </Button>
        </div>
      </div>
    </form>
  )
}

