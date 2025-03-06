"use client";

import type React from "react";
import { useState } from "react";
import {
  BarChart3,
  ChevronDown,
  LineChart,
  LogOut,
  Menu,
  Settings,
  Wallet,
  Calculator,
  Trophy,
  ChevronLeft,
  DollarSign,
  Receipt,
  User2,
  Bot,
  Newspaper,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/ui/button";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { NotificationsDropdown } from "@/src/components/notifications/notifications-dropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { cn } from "@/src/lib/utils";
import { StockSearch } from "@/src/components/search/stock-search";

const sidebarItems = [
  {
    title: "Visão Geral",
    icon: BarChart3,
    href: "/dashboard",
  },
  {
    title: "Carteiras",
    icon: Wallet,
    href: "/dashboard/portfolios",
  },
  {
    title: "Proventos",
    icon: DollarSign,
    href: "/dashboard/dividends",
  },
  {
    title: "Análise",
    icon: LineChart,
    href: "/dashboard/analysis",
  },
  {
    title: "Rankings",
    icon: Trophy,
    href: "/dashboard/rankings",
  },
  {
    title: "Utilitários",
    icon: Calculator,
    href: "/dashboard/utilities",
  },
  {
    title: "IRPF",
    icon: Receipt,
    href: "/dashboard/tax",
  },
  {
    title: "Assistente IA",
    icon: Bot,
    href: "/dashboard/ai-chat",
  },
  {
    title: "Notícias",
    href: "/dashboard/news",
    icon: Newspaper,
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card text-card-foreground backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-card-foreground hover:text-card-foreground/80"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <span className="text-xl font-bold">InvestFolio</span>
            <div className="hidden md:flex">
              <StockSearch />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NotificationsDropdown />
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-card-foreground hover:text-card-foreground/80"
                >
                  <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="h-8 w-8 rounded-full" />
                  <span className="hidden md:inline-block">João Silva</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
                  <User2 className="mr-2 h-4 w-4" />
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 border-r border-border/40 bg-card text-card-foreground transition-all duration-300 ease-in-out",
            "group flex flex-col",
            isCollapsed ? "w-[60px]" : "w-64",
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          )}
        >
          <nav className="relative flex flex-1 flex-col gap-2 p-4 pt-20">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start overflow-hidden whitespace-nowrap text-card-foreground hover:text-card-foreground/80",
                  isCollapsed ? "px-2" : "px-4",
                )}
                onClick={() => router.push(item.href)}
              >
                <item.icon className={cn("h-5 w-5 shrink-0", isCollapsed ? "mr-0" : "mr-2")} />
                <span className={cn("transition-all duration-300", isCollapsed && "hidden group-hover:block")}>
                  {item.title}
                </span>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute -right-4 top-[84px] hidden h-8 w-8 rounded-full border bg-card text-card-foreground hover:text-card-foreground/80 md:flex z-[100] shadow-md hover:shadow-lg",
                isCollapsed && "rotate-180",
              )}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </nav>
        </aside>

        <main
          className={cn("flex-1 transition-all duration-300 ease-in-out", isCollapsed ? "md:ml-[60px]" : "md:ml-64")}
        >
          <div className="p-6 transition-all duration-300 ease-in-out">
            <div
              className={cn(
                "mx-auto w-full transition-all duration-300 ease-in-out",
                isCollapsed ? "max-w-[calc(100vw-60px)]" : "max-w-[calc(100vw-256px)]",
                "px-4 md:px-6",
              )}
            >
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}