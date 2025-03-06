import { FileText, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

interface CompanyReportsProps {
  code: string
}

const reports = [
  {
    id: "1",
    title: "Relatório Anual 2023",
    type: "Demonstrações Financeiras",
    date: "2024-02-15",
    size: "2.5 MB",
    url: "#",
  },
  {
    id: "2",
    title: "Apresentação de Resultados 4T23",
    type: "Resultados Trimestrais",
    date: "2024-02-10",
    size: "1.8 MB",
    url: "#",
  },
  {
    id: "3",
    title: "Relatório de Sustentabilidade 2023",
    type: "ESG",
    date: "2024-01-30",
    size: "3.2 MB",
    url: "#",
  },
  {
    id: "4",
    title: "Plano Estratégico 2024-2028",
    type: "Estratégia",
    date: "2024-01-15",
    size: "1.5 MB",
    url: "#",
  },
]

export function CompanyReports({ code }: CompanyReportsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatórios da Empresa</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50">
              <div className="flex items-start gap-4">
                <FileText className="mt-1 h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">{report.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{new Date(report.date).toLocaleDateString("pt-BR")}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <a href={report.url} download>
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

