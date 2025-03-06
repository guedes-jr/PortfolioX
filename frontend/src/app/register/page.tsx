import type { Metadata } from "next"
import { RegisterForm } from "@/src/components/auth/register-form"
import { BackgroundSlider } from "@/src/components/auth/background-slider"

export const metadata: Metadata = {
  title: "Registrar | InvestFolio",
  description: "Crie sua conta para começar a gerenciar seus investimentos",
}

export default function RegisterPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <BackgroundSlider />
      <div className="relative z-10 w-full max-w-md px-4">
        <RegisterForm />
      </div>
    </div>
  )
}

