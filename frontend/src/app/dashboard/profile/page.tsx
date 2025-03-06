import type { Metadata } from "next"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { ProfileForm } from "@/src/components/profile/profile-form"
import { generateMetadata } from "@/src/lib/metadata"

export const metadata: Metadata = generateMetadata("profile")

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
          <p className="text-muted-foreground">Gerencie suas informações pessoais e preferências</p>
        </div>
        <ProfileForm />
      </div>
    </DashboardLayout>
  )
}

