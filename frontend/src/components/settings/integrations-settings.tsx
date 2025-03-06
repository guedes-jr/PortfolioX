"use client"

import { useState } from "react"
import { Bot, Loader2, RefreshCw, TestTube, Wallet, LineChart, Globe, Database, Check, AlertCircle } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Switch } from "@/src/components/ui/switch"
import { useToast } from "@/src/components/ui/use-toast"
import { Separator } from "@/src/components/ui/separator"
import { Badge } from "@/src/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

export function IntegrationsSettings() {
  const [isTestingB3, setIsTestingB3] = useState(false)
  const [isSyncingB3, setIsSyncingB3] = useState(false)
  const [isTestingStatusInvest, setIsTestingStatusInvest] = useState(false)
  const [isSyncingStatusInvest, setIsSyncingStatusInvest] = useState(false)
  const [isTestingYahooFinance, setIsTestingYahooFinance] = useState(false)
  const [isSyncingYahooFinance, setIsSyncingYahooFinance] = useState(false)
  const [openAiKey, setOpenAiKey] = useState("sk-••••••••••••••••••••••••••••••")
  const [statusInvestKey, setStatusInvestKey] = useState("si_••••••••••••••••••••••••••••••")
  const [ceiPassword, setCeiPassword] = useState("••••••••")
  const { toast } = useToast()

  const handleTestB3Connection = async () => {
    setIsTestingB3(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsTestingB3(false)
    toast({
      title: "Conexão com B3 testada com sucesso",
      description: "Suas credenciais estão corretas e a conexão está funcionando.",
    })
  }

  const handleSyncB3Data = async () => {
    setIsSyncingB3(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSyncingB3(false)
    toast({
      title: "Dados da B3 sincronizados",
      description: "Seus ativos e operações foram atualizados com sucesso.",
    })
  }

  const handleTestStatusInvestConnection = async () => {
    setIsTestingStatusInvest(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsTestingStatusInvest(false)
    toast({
      title: "Conexão com Status Invest testada com sucesso",
      description: "Sua API key está correta e a conexão está funcionando.",
    })
  }

  const handleSyncStatusInvestData = async () => {
    setIsSyncingStatusInvest(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSyncingStatusInvest(false)
    toast({
      title: "Dados do Status Invest sincronizados",
      description: "Indicadores fundamentalistas e cotações foram atualizados com sucesso.",
    })
  }

  return (
    <div className="space-y-6">
      {/* AI Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Integração com IA
              </CardTitle>
              <CardDescription>Configure o provedor de IA e as configurações do assistente</CardDescription>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <Check className="mr-1 h-3 w-3" /> Conectado
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ai-provider">Provedor de IA</Label>
              <Select defaultValue="openai">
                <SelectTrigger id="ai-provider">
                  <SelectValue placeholder="Selecione o provedor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                  <SelectItem value="google">Google AI</SelectItem>
                  <SelectItem value="mistral">Mistral AI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ai-model">Modelo</Label>
              <Select defaultValue="gpt-4o">
                <SelectTrigger id="ai-model">
                  <SelectValue placeholder="Selecione o modelo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                  <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="openai-api-key">API Key</Label>
            <Input
              id="openai-api-key"
              type="password"
              value={openAiKey}
              onChange={(e) => setOpenAiKey(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Sua API key é armazenada de forma segura e nunca compartilhada com terceiros.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Histórico de Conversas</Label>
                <p className="text-sm text-muted-foreground">Armazenar histórico para melhorar as respostas</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sugestões Proativas</Label>
                <p className="text-sm text-muted-foreground">Receber sugestões baseadas na sua carteira</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* B3 Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Integração com B3
              </CardTitle>
              <CardDescription>Configure a integração com a B3 para importar seus investimentos</CardDescription>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <Check className="mr-1 h-3 w-3" /> Conectado
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="cei-url">URL de Conexão CEI</Label>
            <Input id="cei-url" defaultValue="https://cei.b3.com.br/api/v1" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" defaultValue="123.456.789-00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cei-password">Senha</Label>
              <Input
                id="cei-password"
                type="password"
                value={ceiPassword}
                onChange={(e) => setCeiPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="broker">Corretora</Label>
            <Select defaultValue="all">
              <SelectTrigger id="broker">
                <SelectValue placeholder="Selecione a corretora" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as corretoras</SelectItem>
                <SelectItem value="xp">XP Investimentos</SelectItem>
                <SelectItem value="clear">Clear</SelectItem>
                <SelectItem value="nuinvest">NuInvest</SelectItem>
                <SelectItem value="btg">BTG Pactual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sincronização Automática</Label>
                <p className="text-sm text-muted-foreground">Sincronizar dados automaticamente</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sync-interval">Intervalo de Sincronização</Label>
              <Select defaultValue="daily">
                <SelectTrigger id="sync-interval">
                  <SelectValue placeholder="Selecione o intervalo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">A cada hora</SelectItem>
                  <SelectItem value="daily">Diariamente</SelectItem>
                  <SelectItem value="weekly">Semanalmente</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={handleTestB3Connection} disabled={isTestingB3}>
              {isTestingB3 ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <TestTube className="mr-2 h-4 w-4" />}
              Testar Conexão
            </Button>
            <Button variant="secondary" onClick={handleSyncB3Data} disabled={isSyncingB3}>
              {isSyncingB3 ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
              Sincronizar Agora
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Status Invest Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Integração com Status Invest
              </CardTitle>
              <CardDescription>Configure a integração com o Status Invest para dados fundamentalistas</CardDescription>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <Check className="mr-1 h-3 w-3" /> Conectado
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="statusinvest-api-key">API Key</Label>
            <Input
              id="statusinvest-api-key"
              type="password"
              value={statusInvestKey}
              onChange={(e) => setStatusInvestKey(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Obtenha sua API key no painel de desenvolvedor do Status Invest.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="statusinvest-endpoint">Endpoint da API</Label>
            <Input id="statusinvest-endpoint" defaultValue="https://api.statusinvest.com.br/v1" />
          </div>

          <Tabs defaultValue="stocks">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="stocks">Ações</TabsTrigger>
              <TabsTrigger value="fiis">FIIs</TabsTrigger>
              <TabsTrigger value="bonds">Renda Fixa</TabsTrigger>
            </TabsList>
            <TabsContent value="stocks" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Indicadores Fundamentalistas</Label>
                  <p className="text-sm text-muted-foreground">P/L, P/VP, ROE, Dividend Yield, etc.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dados Históricos</Label>
                  <p className="text-sm text-muted-foreground">Cotações e indicadores históricos</p>
                </div>
                <Switch defaultChecked />
              </div>
            </TabsContent>
            <TabsContent value="fiis" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Indicadores de FIIs</Label>
                  <p className="text-sm text-muted-foreground">P/VP, Dividend Yield, Vacância, etc.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Histórico de Proventos</Label>
                  <p className="text-sm text-muted-foreground">Histórico de rendimentos pagos</p>
                </div>
                <Switch defaultChecked />
              </div>
            </TabsContent>
            <TabsContent value="bonds" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tesouro Direto</Label>
                  <p className="text-sm text-muted-foreground">Taxas e preços de títulos públicos</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>CDBs e LCIs/LCAs</Label>
                  <p className="text-sm text-muted-foreground">Taxas e emissores de renda fixa privada</p>
                </div>
                <Switch defaultChecked />
              </div>
            </TabsContent>
          </Tabs>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="statusinvest-sync-interval">Intervalo de Atualização</Label>
            <Select defaultValue="daily">
              <SelectTrigger id="statusinvest-sync-interval">
                <SelectValue placeholder="Selecione o intervalo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">A cada hora</SelectItem>
                <SelectItem value="daily">Diariamente</SelectItem>
                <SelectItem value="weekly">Semanalmente</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={handleTestStatusInvestConnection} disabled={isTestingStatusInvest}>
              {isTestingStatusInvest ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <TestTube className="mr-2 h-4 w-4" />
              )}
              Testar Conexão
            </Button>
            <Button variant="secondary" onClick={handleSyncStatusInvestData} disabled={isSyncingStatusInvest}>
              {isSyncingStatusInvest ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
              )}
              Sincronizar Agora
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Other Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Outras Integrações
          </CardTitle>
          <CardDescription>Configure integrações adicionais para expandir as funcionalidades</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Yahoo Finance */}
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Yahoo Finance</CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    <Check className="mr-1 h-3 w-3" /> Ativo
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  Dados de mercado internacional e cotações em tempo real
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-sm">Ativo</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setIsTestingYahooFinance(true)
                        setTimeout(() => {
                          setIsTestingYahooFinance(false)
                          toast({
                            title: "Conexão testada com sucesso",
                            description: "A API do Yahoo Finance está funcionando corretamente.",
                          })
                        }, 1500)
                      }}
                      disabled={isTestingYahooFinance}
                    >
                      {isTestingYahooFinance ? (
                        <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      ) : (
                        <TestTube className="mr-2 h-3 w-3" />
                      )}
                      Testar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setIsSyncingYahooFinance(true)
                        setTimeout(() => {
                          setIsSyncingYahooFinance(false)
                          toast({
                            title: "Dados sincronizados",
                            description: "Os dados do Yahoo Finance foram atualizados com sucesso.",
                          })
                        }, 1500)
                      }}
                      disabled={isSyncingYahooFinance}
                    >
                      {isSyncingYahooFinance ? (
                        <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      ) : (
                        <RefreshCw className="mr-2 h-3 w-3" />
                      )}
                      Sincronizar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investing.com */}
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Investing.com</CardTitle>
                  <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    <AlertCircle className="mr-1 h-3 w-3" /> Inativo
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  Análises técnicas, calendário econômico e notícias do mercado
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-sm">Ativo</Label>
                    </div>
                    <Switch />
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <Database className="mr-2 h-3 w-3" />
                    Configurar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tradingview */}
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">TradingView</CardTitle>
                  <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    <AlertCircle className="mr-1 h-3 w-3" /> Inativo
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  Gráficos avançados e indicadores técnicos personalizados
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-sm">Ativo</Label>
                    </div>
                    <Switch />
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <Database className="mr-2 h-3 w-3" />
                    Configurar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meus Dividendos */}
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Meus Dividendos</CardTitle>
                  <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    <AlertCircle className="mr-1 h-3 w-3" /> Inativo
                  </Badge>
                </div>
                <CardDescription className="text-xs">Calendário de proventos e histórico de dividendos</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-sm">Ativo</Label>
                    </div>
                    <Switch />
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <Database className="mr-2 h-3 w-3" />
                    Configurar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

