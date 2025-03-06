import { ErrorPage } from "@/src/components/error-page"

export default function StockNotFound() {
  return (
    <ErrorPage
      code={404}
      title="Ação não encontrada"
      description="A ação que você está procurando não existe ou foi removida"
    />
  )
}

