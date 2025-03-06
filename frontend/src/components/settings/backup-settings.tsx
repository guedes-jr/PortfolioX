"use client"

import { useState } from "react"
import { Calendar, Cloud, Download, Loader2, Upload } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Switch } from "@/src/components/ui/switch"
import { useToast } from "@/src/components/ui/use-toast"

const cloudStorageOptions = [
  { id: "mega", name: "MEGA", icon: "🔐" },
  { id: "gdrive", name: "Google Drive", icon: "📁" },
  { id: "dropbox", name: "Dropbox", icon: "📦" },
  { id: "onedrive", name: "OneDrive", icon: "☁️" },
]

const backupFrequencyOptions = [
  { value: "daily", label: "Diário" },
  { value: "weekly", label: "Semanal" },
  { value: "monthly", label: "Mensal" },
]

export function BackupSettings() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isBackingUp, setIsBackingUp] = useState(false)
  const { toast } = useToast()

  const handleConnect = async (providerId: string) => {
    setIsConnecting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsConnecting(false)
    toast({
      title: "Conectado com sucesso",
      description: `Sua conta foi conectada ao ${cloudStorageOptions.find((opt) => opt.id === providerId)?.name}`,
    })
  }

  const handleBackupNow = async () => {
    setIsBackingUp(true)
    // Simulate backup process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsBackingUp(false)
    toast({
      title: "Backup realizado",
      description: "Seus dados foram salvos com sucesso",
    })
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Armazenamento em Nuvem</CardTitle>
          <CardDescription>Conecte suas contas de armazenamento em nuvem para backup</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cloudStorageOptions.map((option) => (
              <Card key={option.id} className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span>{option.icon}</span>
                    {option.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleConnect(option.id)}
                    disabled={isConnecting}
                  >
                    {isConnecting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Cloud className="mr-2 h-4 w-4" />
                    )}
                    Conectar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configurações de Backup</CardTitle>
          <CardDescription>Configure as rotinas de backup automático</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Frequência do Backup</Label>
              <Select defaultValue="daily">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a frequência" />
                </SelectTrigger>
                <SelectContent>
                  {backupFrequencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Horário do Backup</Label>
              <Input type="time" defaultValue="23:00" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Backup Incremental</Label>
                <p className="text-sm text-muted-foreground">Salva apenas as alterações desde o último backup</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Compressão de Dados</Label>
                <p className="text-sm text-muted-foreground">Comprime os arquivos para economizar espaço</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações</Label>
                <p className="text-sm text-muted-foreground">Receba notificações sobre o status do backup</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button onClick={handleBackupNow} disabled={isBackingUp}>
              {isBackingUp ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
              Fazer Backup Agora
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Restaurar Backup
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Histórico de Backups
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

