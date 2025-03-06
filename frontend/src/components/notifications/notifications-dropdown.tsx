import { BellDot } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

type Notification = {
  id: string
  title: string
  description: string
  time: string
  type: "info" | "warning" | "success"
  read: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "PETR4 atingiu sua meta",
    description: "O ativo PETR4 atingiu o preço alvo de R$ 35,82",
    time: "Há 5 minutos",
    type: "success",
    read: false,
  },
  {
    id: "2",
    title: "Dividendos recebidos",
    description: "Você recebeu R$ 156,75 em dividendos de ITUB4",
    time: "Há 2 horas",
    type: "info",
    read: false,
  },
  {
    id: "3",
    title: "Alerta de variação",
    description: "VALE3 teve queda superior a 3% hoje",
    time: "Há 3 horas",
    type: "warning",
    read: false,
  },
  {
    id: "4",
    title: "Nova recomendação",
    description: "WEGE3 foi adicionada à carteira recomendada",
    time: "Há 5 horas",
    type: "info",
    read: true,
  },
  {
    id: "5",
    title: "Rebalanceamento necessário",
    description: "Sua carteira precisa ser rebalanceada",
    time: "Há 1 dia",
    type: "warning",
    read: true,
  },
]

const getNotificationColor = (type: Notification["type"]) => {
  switch (type) {
    case "success":
      return "text-green-500"
    case "warning":
      return "text-yellow-500"
    case "info":
      return "text-blue-500"
    default:
      return "text-muted-foreground"
  }
}

export function NotificationsDropdown() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <BellDot className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-card" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Notificações</p>
            <p className="text-xs leading-none text-muted-foreground">Você tem {unreadCount} notificações não lidas</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="overflow-y-auto max-h-[300px]">
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 p-4">
              <div className="flex w-full items-center justify-between">
                <p className={`text-sm font-medium ${notification.read ? "text-muted-foreground" : ""}`}>
                  {notification.title}
                </p>
                <span className={`text-xs ${getNotificationColor(notification.type)}`}>{notification.time}</span>
              </div>
              <p className="text-xs text-muted-foreground">{notification.description}</p>
              {!notification.read && <span className="h-2 w-2 rounded-full bg-blue-500 absolute top-4 right-2" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full text-center cursor-pointer">
          <span className="text-sm text-muted-foreground w-full text-center">Ver todas as notificações</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

