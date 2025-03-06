"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { BackupSettings } from "./backup-settings"
import { SecuritySettings } from "./security-settings"
import { PortfolioSettings } from "./portfolio-settings"
import { RatingCriteria } from "./rating-criteria"
import { IntegrationsSettings } from "./integrations-settings"
import { DashboardSettings } from "./dashboard-settings"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="dashboard" className="space-y-6">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="portfolio">Carteira</TabsTrigger>
        <TabsTrigger value="rating">Avaliação</TabsTrigger>
        <TabsTrigger value="integrations">Integrações</TabsTrigger>
        <TabsTrigger value="security">Segurança</TabsTrigger>
        <TabsTrigger value="backup">Backup</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <DashboardSettings />
      </TabsContent>
      <TabsContent value="portfolio">
        <PortfolioSettings />
      </TabsContent>
      <TabsContent value="rating">
        <RatingCriteria />
      </TabsContent>
      <TabsContent value="integrations">
        <IntegrationsSettings />
      </TabsContent>
      <TabsContent value="security">
        <SecuritySettings />
      </TabsContent>
      <TabsContent value="backup">
        <BackupSettings />
      </TabsContent>
    </Tabs>
  )
}

