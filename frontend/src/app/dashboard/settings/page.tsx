import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { SettingsTabs } from "@/src/components/settings/settings-tabs"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("settings")

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
          <p className="text-muted-foreground">Gerencie as configurações da sua conta e preferências</p>
        </div>
        <SettingsTabs />
      </div>
    </DashboardLayout>
  )
}

