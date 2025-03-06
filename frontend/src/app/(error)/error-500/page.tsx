import { ErrorPage } from "@/src/components/error-page"

export default function ServerError() {
  return (
    <ErrorPage
      code={500}
      title="Erro interno"
      description="Ocorreu um erro no servidor. Por favor, tente novamente mais tarde"
    />
  )
}

