import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DashboardLayout } from "@/src/components/layout/dashboard-layout"
import { NewsDetail } from "@/src/components/news/news-detail"

interface NewsDetailPageProps {
  params: {
    id: string
  }
}

// This would normally come from an API
const getNewsById = async (id: string) => {
  // Mock data - replace with real API call
  const news = {
    id: "1",
    title: "Banco Central mantém taxa Selic em 11,75% ao ano",
    description:
      "Copom decide manter taxa básica de juros, citando necessidade de cautela diante do cenário econômico atual.",
    content: `
      O Comitê de Política Monetária (Copom) do Banco Central decidiu, por unanimidade, manter a taxa Selic em 11,75% ao ano. A decisão era amplamente esperada pelo mercado e marca a segunda reunião consecutiva em que a taxa básica de juros permanece no mesmo patamar.

      Em comunicado, o BC destacou que a decisão reflete a necessidade de manter uma postura cautelosa diante das incertezas no cenário econômico global e doméstico. O comitê também reforçou seu compromisso com a convergência da inflação para a meta.

      Principais pontos destacados:
      - Inflação mostra tendência de desaceleração, mas ainda requer atenção
      - Atividade econômica segue resiliente
      - Cenário externo permanece desafiador
      - BC mantém porta aberta para novos cortes, condicionados à evolução do cenário

      O mercado financeiro reagiu de forma positiva à decisão, com o Ibovespa mantendo tendência de alta e o dólar operando em baixa frente ao real.
    `,
    source: "InfoMoney",
    author: "Maria Silva",
    category: "market",
    date: "2024-02-27T15:30:00",
    image: "/placeholder.svg?height=400&width=800",
    url: "#",
    relatedAssets: ["ITUB4", "BBDC4", "PETR4"],
    tags: ["Selic", "Banco Central", "Juros", "Economia"],
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return news
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const news = await getNewsById(params.id)

  if (!news) {
    return generateMetadata("news")
  }

  return {
    title: `${news.title} | InvestFolio`,
    description: news.description,
    keywords: [...news.tags, "notícias", "mercado financeiro"],
  }
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = await getNewsById(params.id)

  if (!news) {
    notFound()
  }

  return (
    <DashboardLayout>
      <NewsDetail news={news} />
    </DashboardLayout>
  )
}

