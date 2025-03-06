import { ErrorPage } from "@/src/components/error-page"

export default function Forbidden() {
  return <ErrorPage code={403} title="Acesso negado" description="Você não tem permissão para acessar este recurso" />
}

