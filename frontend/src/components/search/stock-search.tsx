"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/src/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover"
import { Input } from "@/src/components/ui/input"
import { cn } from "@/src/lib/utils"

// Mock data - replace with real API call
const stocks = [
  {
    code: "PETR4",
    name: "Petrobras PN",
    price: 35.82,
    change: 1.25,
  },
  {
    code: "VALE3",
    name: "Vale ON",
    price: 68.9,
    change: -0.8,
  },
  {
    code: "ITUB4",
    name: "Itaú Unibanco PN",
    price: 32.54,
    change: 0.5,
  },
  {
    code: "BBDC4",
    name: "Bradesco PN",
    price: 15.32,
    change: -1.2,
  },
]

export function StockSearch() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const router = useRouter()

  const handleSelect = (code: string) => {
    setValue(code)
    setOpen(false)
    router.push(`/dashboard/stocks/${code}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar ações..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-64 pl-8"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Digite o código ou nome da ação" />
          <CommandList>
            <CommandEmpty>Nenhuma ação encontrada.</CommandEmpty>
            <CommandGroup heading="Ações">
              {stocks.map((stock) => (
                <CommandItem key={stock.code} value={stock.code} onSelect={() => handleSelect(stock.code)}>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <span className="font-medium">{stock.code}</span>
                      <span className="ml-2 text-muted-foreground">{stock.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">
                        {stock.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                      <span className={cn("ml-2", stock.change >= 0 ? "text-green-500" : "text-red-500")}>
                        {stock.change > 0 ? "+" : ""}
                        {stock.change}%
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

