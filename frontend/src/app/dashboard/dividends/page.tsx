import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { DividendsCalendar } from "@/src/components/dividends/dividends-calendar"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("dividends")

export default function DividendsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendário de Proventos</h1>
          <p className="text-muted-foreground">Acompanhe os proventos recebidos e previstos para cada mês</p>
        </div>
        <DividendsCalendar />
      </div>
    </DashboardLayout>
  )
}

