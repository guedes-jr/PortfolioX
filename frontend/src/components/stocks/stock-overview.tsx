"use client"

import { useState } from "react"
import { Heart, Plus, Star, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { useToast } from "@/src/components/ui/use-toast"

interface StockOverviewProps {
  stock: {
    code: string
    name: string
    price: number
    change: number
    volume: number
    marketCap: number
  }
}

export function StockOverview({ stock }: StockOverviewProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [rating, setRating] = useState<number>(0)
  const { toast } = useToast()

  const handleAddToPortfolio = () => {
    toast({
      title: "Ação adicionada",
      description: `${stock.code} foi adicionada à sua carteira com sucesso.`,
    })
  }

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast({
      title: isFavorite ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: `${stock.code} foi ${isFavorite ? "removido dos" : "adicionado aos"} favoritos.`,
    })
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "bg-green-500"
    if (rating >= 2.5) return "bg-yellow-500"
    if (rating > 0) return "bg-red-500"
    return "bg-gray-200"
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{stock.code}</h1>
            <p className="text-muted-foreground">{stock.name}</p>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <Button key={value} variant="ghost" size="icon" className="h-8 w-8" onClick={() => setRating(value)}>
                <Star
                  className={`h-5 w-5 ${value <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                />
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Adicionar à Carteira
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar à Carteira</DialogTitle>
                <DialogDescription>Selecione a carteira para adicionar {stock.code}</DialogDescription>
              </DialogHeader>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma carteira" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Carteira Principal</SelectItem>
                  <SelectItem value="dividends">Carteira de Dividendos</SelectItem>
                  <SelectItem value="trading">Carteira de Trading</SelectItem>
                </SelectContent>
              </Select>
              <DialogFooter>
                <Button onClick={handleAddToPortfolio}>Adicionar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={handleToggleFavorite}>
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className={getRatingColor(rating)}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Preço Atual</CardTitle>
            {stock.change >= 0 ? (
              <TrendingUp className="h-4 w-4 text-white" />
            ) : (
              <TrendingDown className="h-4 w-4 text-white" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {stock.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
            <p className={`text-xs text-white/90`}>
              {stock.change > 0 ? "+" : ""}
              {stock.change}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stock.volume.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Negociações hoje</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor de Mercado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(stock.marketCap / 1e9).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2,
              })}
              B
            </div>
            <p className="text-xs text-muted-foreground">Market Cap</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ranking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#3</div>
            <p className="text-xs text-muted-foreground">Por valor de mercado</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

