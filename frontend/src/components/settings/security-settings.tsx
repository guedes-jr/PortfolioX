"use client"

import type React from "react"

import { useState } from "react"
import { KeyRound, Loader2, Smartphone } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Switch } from "@/src/components/ui/switch"
import { useToast } from "@/src/components/ui/use-toast"

export function SecuritySettings() {
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const { toast } = useToast()

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsChangingPassword(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsChangingPassword(false)
    toast({
      title: "Senha alterada",
      description: "Sua senha foi atualizada com sucesso",
    })
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Alterar Senha</CardTitle>
          <CardDescription>Atualize sua senha de acesso</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePassword} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Senha Atual</Label>
              <Input id="current-password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">Nova Senha</Label>
              <Input id="new-password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" disabled={isChangingPassword}>
              {isChangingPassword && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Alterar Senha
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Autenticação em Duas Etapas</CardTitle>
          <CardDescription>Aumente a segurança da sua conta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Autenticação por App</Label>
              <p className="text-sm text-muted-foreground">
                Use um aplicativo autenticador (Google Authenticator, Authy)
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>SMS</Label>
              <p className="text-sm text-muted-foreground">Receba códigos de verificação por SMS</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <KeyRound className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Chaves de Recuperação</p>
                <p className="text-sm text-muted-foreground">Gere chaves de backup para recuperar sua conta</p>
              </div>
              <Button variant="outline">Gerar Chaves</Button>
            </div>

            <div className="flex items-center gap-4">
              <Smartphone className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Dispositivos Conectados</p>
                <p className="text-sm text-muted-foreground">Gerencie os dispositivos com acesso à sua conta</p>
              </div>
              <Button variant="outline">Gerenciar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

