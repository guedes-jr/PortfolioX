import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { NewsTabs } from "@/src/components/news/news-tabs"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("news")

export default function NewsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notícias</h1>
          <p className="text-muted-foreground">
            Acompanhe as últimas notícias do mercado financeiro e dos seus investimentos
          </p>
        </div>
        <NewsTabs />
      </div>
    </DashboardLayout>
  )
}

