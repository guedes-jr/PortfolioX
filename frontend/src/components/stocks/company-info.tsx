import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Building2, Globe, Users2 } from "lucide-react"

interface CompanyInfoProps {
  code: string
  sector: string
}

export function CompanyInfo({ code, sector }: CompanyInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações da Empresa</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <Building2 className="mt-1 h-5 w-5 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Sobre</h4>
            <p className="text-sm text-muted-foreground">
              A Petrobras é uma empresa brasileira de energia, com foco em exploração e produção de petróleo e gás
              natural.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Globe className="mt-1 h-5 w-5 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Sede</h4>
            <p className="text-sm text-muted-foreground">Rio de Janeiro, RJ, Brasil</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Users2 className="mt-1 h-5 w-5 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Funcionários</h4>
            <p className="text-sm text-muted-foreground">Aproximadamente 45.000 funcionários</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Setores de Atuação</h4>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Petróleo e Gás</div>
            <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Energia</div>
            <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Combustíveis</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

