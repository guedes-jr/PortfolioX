import type { Metadata } from "next"

type RouteMetadata = {
  title: string
  description: string
  keywords: string[]
}

export const routeMetadata: { [key: string]: RouteMetadata } = {
  dashboard: {
    title: "Dashboard",
    description: "Acompanhe seus investimentos em tempo real",
    keywords: ["investimentos", "dashboard", "carteira", "ativos"],
  },
  portfolios: {
    title: "Carteiras",
    description: "Gerencie seus investimentos e acompanhe seu desempenho",
    keywords: ["carteira", "investimentos", "ativos", "rentabilidade"],
  },
  analysis: {
    title: "Análise de Ativos",
    description: "Acompanhe e compare o desempenho dos ativos",
    keywords: ["análise", "ativos", "desempenho", "comparativo"],
  },
  rankings: {
    title: "Rankings",
    description: "Explore as ações do mercado classificadas por diferentes métricas",
    keywords: ["rankings", "ações", "métricas", "liquidez", "valor", "dividendos", "crescimento"],
  },
  utilities: {
    title: "Utilitários",
    description: "Ferramentas úteis para auxiliar em suas decisões de investimento",
    keywords: ["utilitários", "ferramentas", "juros compostos", "alocação"],
  },
  dividends: {
    title: "Calendário de Proventos",
    description: "Acompanhe os proventos recebidos e previstos para cada mês",
    keywords: ["dividendos", "proventos", "calendário", "rendimentos"],
  },
  tax: {
    title: "Controle IRPF",
    description: "Gestão e acompanhamento de imposto de renda sobre investimentos",
    keywords: [
      "IRPF",
      "imposto de renda",
      "tributação",
      "ganho de capital",
      "prejuízo fiscal",
      "swing trade",
      "day trade",
      "compensação de perdas",
    ],
  },
  profile: {
    title: "Meu Perfil",
    description: "Gerencie suas informações pessoais e preferências",
    keywords: ["perfil", "conta", "configurações", "preferências", "notificações"],
  },
  settings: {
    title: "Configurações",
    description: "Gerencie as configurações da sua conta e preferências",
    keywords: ["configurações", "backup", "segurança", "carteira", "preferências", "armazenamento"],
  },
  "ai-chat": {
    title: "Assistente de Investimentos",
    description: "Converse com a IA para receber análises e recomendações personalizadas",
    keywords: ["ia", "assistente", "investimentos", "análise", "recomendações", "chat"],
  },
  news: {
    title: "Notícias",
    description: "Acompanhe as últimas notícias do mercado financeiro e dos seus investimentos",
    keywords: ["notícias", "mercado financeiro", "investimentos", "ações", "economia"],
  },
}

export const generateMetadata = (route: keyof typeof routeMetadata): Metadata => {
  const metadata = routeMetadata[route]

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  }
}

