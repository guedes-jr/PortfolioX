import type { Metadata } from "next"
import { LoginForm } from "@/src/components/auth/login-form"
import { BackgroundSlider } from "@/src/components/auth/background-slider"

export const metadata: Metadata = {
  title: "Login | InvestFolio",
  description: "Faça login para acessar sua carteira de investimentos",
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <BackgroundSlider />
      <div className="relative z-10 w-full max-w-md px-4">
        <LoginForm />
      </div>
    </div>
  )
}

