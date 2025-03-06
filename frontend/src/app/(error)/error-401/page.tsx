import { ErrorPage } from "@/src/components/error-page"

export default function Unauthorized() {
  return <ErrorPage code={401} title="Não autorizado" description="Você não tem permissão para acessar esta página" />
}

