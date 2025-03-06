"use client"

import Link from "next/link"
import { ArrowLeft, Bookmark, Calendar, ExternalLink, Share2, Tag, User } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Separator } from "@/src/components/ui/separator"
import { useToast } from "@/src/components/ui/use-toast"

interface NewsDetailProps {
  news: {
    id: string
    title: string
    description: string
    content: string
    source: string
    author: string
    category: string
    date: string
    image: string
    url: string
    relatedAssets: string[]
    tags: string[]
  }
}

export function NewsDetail({ news }: NewsDetailProps) {
  const { toast } = useToast()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copiado",
      description: "O link da notícia foi copiado para a área de transferência",
    })
  }

  const handleSave = () => {
    toast({
      title: "Notícia salva",
      description: "A notícia foi salva nos favoritos",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/dashboard/news">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handleSave}>
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{news.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{news.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {news.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(news.date)}
          </div>
          <div className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            {news.source}
          </div>
        </div>

        <img
          src={news.image || "/placeholder.svg"}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
          width={800}
          height={400}
        />

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          {news.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        <Separator className="my-6" />

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Ativos Relacionados</h2>
          <div className="flex flex-wrap gap-2">
            {news.relatedAssets.map((asset) => (
              <Button key={asset} variant="outline" asChild>
                <Link href={`/dashboard/stocks/${asset}`}>{asset}</Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

