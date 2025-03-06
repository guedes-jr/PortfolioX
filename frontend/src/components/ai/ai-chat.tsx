"use client"

import type React from "react"

import { useRef, useState } from "react"
import {
  Bot,
  SendHorizontal,
  User,
  ChevronDown,
  Copy,
  Share2,
  Bookmark,
  BarChart3,
  LineChart,
  HelpCircle,
  History,
  X,
} from "lucide-react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Textarea } from "@/src/components/ui/textarea"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import { cn } from "@/src/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/src/components/ui/tooltip"
import { Badge } from "@/src/components/ui/badge"
import { Separator } from "@/src/components/ui/separator"
import { useToast } from "@/src/components/ui/use-toast"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  type?: "analysis" | "strategy" | "question"
  timestamp: Date
  asset?: {
    code: string
    name: string
    price: number
    change: number
  }
}

const quickActions = [
  {
    label: "Analisar ativo",
    icon: BarChart3,
    prompt: "Analise o ativo PETR4 considerando indicadores fundamentalistas e técnicos.",
    type: "analysis",
  },
  {
    label: "Sugerir estratégia",
    icon: LineChart,
    prompt: "Sugira uma estratégia de investimento para minha carteira considerando meu perfil conservador.",
    type: "strategy",
  },
  {
    label: "Tirar dúvida",
    icon: HelpCircle,
    prompt: "O que é dividend yield e como ele pode me ajudar a escolher ações?",
    type: "question",
  },
]

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Olá! Sou seu assistente de investimentos. Como posso ajudar você hoje? Posso analisar ativos, sugerir estratégias de investimento ou responder suas dúvidas sobre o mercado financeiro.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Esta é uma resposta simulada do assistente de IA. Em uma implementação real, isso seria processado pelo modelo de IA escolhido nas configurações.",
        timestamp: new Date(),
        type: "analysis",
        asset: {
          code: "PETR4",
          name: "Petrobras PN",
          price: 35.82,
          change: 1.25,
        },
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
      scrollAreaRef.current?.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      })
    }, 1000)
  }

  const handleQuickAction = (prompt: string, type: Message["type"]) => {
    setInput(prompt)
  }

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
    toast({
      title: "Mensagem copiada",
      description: "O conteúdo foi copiado para a área de transferência",
    })
  }

  const handleSaveMessage = (message: Message) => {
    toast({
      title: "Mensagem salva",
      description: "A mensagem foi salva nos favoritos",
    })
  }

  const handleShareMessage = (message: Message) => {
    toast({
      title: "Mensagem compartilhada",
      description: "O link foi copiado para a área de transferência",
    })
  }

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <TooltipProvider>
      <div className="grid h-[700px] gap-4 lg:grid-cols-[300px_1fr]">
        <Card className={cn("lg:block", showHistory ? "fixed inset-0 z-50 lg:relative" : "hidden")}>
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-semibold">Histórico de Conversas</h2>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setShowHistory(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="h-[calc(100%-65px)] p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Hoje</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-left font-normal">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Análise PETR4
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left font-normal">
                    <LineChart className="mr-2 h-4 w-4" />
                    Estratégia Barsi
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Esta semana</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-left font-normal">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Dúvida sobre FIIs
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left font-normal">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Análise VALE3
                  </Button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </Card>

        <Card className="flex flex-col">
          <div className="flex items-center gap-2 border-b p-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setShowHistory(true)}>
              <History className="h-5 w-5" />
            </Button>
            <h2 className="font-semibold">Assistente de Investimentos</h2>
          </div>

          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-4 py-2",
                    message.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted",
                  )}
                >
                  <div className="flex items-start gap-3">
                    {message.role === "assistant" ? (
                      <Bot className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    ) : (
                      <User className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    )}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {message.type && (
                          <Badge variant="secondary" className="h-5 rounded-sm px-1">
                            {message.type}
                          </Badge>
                        )}
                        <span className="text-xs">{formatTime(message.timestamp)}</span>
                      </div>
                      <p className="text-sm font-medium leading-tight">{message.content}</p>
                      {message.asset && (
                        <Card className="mt-2 p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{message.asset.code}</h4>
                              <p className="text-sm text-muted-foreground">{message.asset.name}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">
                                {message.asset.price.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </p>
                              <p
                                className={cn("text-sm", message.asset.change >= 0 ? "text-green-500" : "text-red-500")}
                              >
                                {message.asset.change > 0 ? "+" : ""}
                                {message.asset.change}%
                              </p>
                            </div>
                          </div>
                        </Card>
                      )}
                    </div>
                  </div>
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-1 self-end">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleCopyMessage(message.content)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copiar mensagem</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleSaveMessage(message)}
                          >
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Salvar mensagem</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleShareMessage(message)}
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Compartilhar mensagem</TooltipContent>
                      </Tooltip>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex w-max items-start gap-3 rounded-lg bg-muted px-4 py-2">
                  <Bot className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <span className="size-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]"></span>
                      <span className="size-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.2s]"></span>
                      <span className="size-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.1s]"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="mb-4 flex gap-2">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="secondary"
                  size="sm"
                  className="h-8"
                  onClick={() => handleQuickAction(action.prompt, action.type)}
                >
                  <action.icon className="mr-2 h-4 w-4" />
                  {action.label}
                </Button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <div className="relative flex-1">
                <Textarea
                  placeholder="Digite sua mensagem..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[52px] pr-10"
                  rows={1}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Limpar conversa</DropdownMenuItem>
                    <DropdownMenuItem>Exportar conversa</DropdownMenuItem>
                    <DropdownMenuItem>Configurações</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button type="submit" size="icon" disabled={isLoading}>
                <SendHorizontal className="h-5 w-5" />
                <span className="sr-only">Enviar mensagem</span>
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  )
}

