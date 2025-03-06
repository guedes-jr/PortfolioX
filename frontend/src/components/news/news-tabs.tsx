"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { GeneralNews } from "./general-news"
import { PortfolioNews } from "./portfolio-news"

export function NewsTabs() {
  return (
    <Tabs defaultValue="general" className="space-y-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="general">Notícias Gerais</TabsTrigger>
        <TabsTrigger value="portfolio">Minha Carteira</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <GeneralNews />
      </TabsContent>
      <TabsContent value="portfolio">
        <PortfolioNews />
      </TabsContent>
    </Tabs>
  )
}

