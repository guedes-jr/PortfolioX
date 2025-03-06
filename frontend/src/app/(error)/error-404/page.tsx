import { ErrorPage } from "@/src/components/error-page"

export default function NotFound() {
  return (
    <ErrorPage code={404} title="Página não encontrada" description="A página que você está procurando não existe" />
  )
}

