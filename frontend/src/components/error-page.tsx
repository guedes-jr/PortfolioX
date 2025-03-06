import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/src/components/ui/button"

interface ErrorPageProps {
  code: number
  title: string
  description: string
}

export function ErrorPage({ code, title, description }: ErrorPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container flex max-w-md flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-red-100 p-3 text-red-600 dark:bg-red-900/30">
          <AlertCircle className="h-10 w-10" />
        </div>
        <h1 className="mb-2 text-7xl font-bold">{code}</h1>
        <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
        <p className="mb-6 text-muted-foreground">{description}</p>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => window.history.back()}>
            Voltar
          </Button>
          <Button asChild>
            <Link href="/dashboard">Ir para o Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

