import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { AiChat } from "@/src/components/ai/ai-chat"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("ai-chat")

export default function AiChatPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assistente de Investimentos</h1>
          <p className="text-muted-foreground">
            Converse com a IA para receber análises e recomendações personalizadas
          </p>
        </div>
        <AiChat />
      </div>
    </DashboardLayout>
  )
}

