"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"
import { Switch } from "@/src/components/ui/switch"
import { Slider } from "@/src/components/ui/slider"
import { Button } from "@/src/components/ui/button"
import { Separator } from "@/src/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"

interface CriteriaGroup {
  name: string
  weight: number
  enabled: boolean
  criteria: {
    name: string
    weight: number
    operator: ">" | "<" | "between"
    value: number
    maxValue?: number
    enabled: boolean
  }[]
}

const defaultCriteriaGroups: CriteriaGroup[] = [
  {
    name: "Indicadores Fundamentalistas",
    weight: 40,
    enabled: true,
    criteria: [
      {
        name: "P/L",
        weight: 25,
        operator: "between",
        value: 5,
        maxValue: 15,
        enabled: true,
      },
      {
        name: "P/VP",
        weight: 25,
        operator: "between",
        value: 0.5,
        maxValue: 2,
        enabled: true,
      },
      {
        name: "ROE",
        weight: 25,
        operator: ">",
        value: 15,
        enabled: true,
      },
      {
        name: "Dividend Yield",
        weight: 25,
        operator: ">",
        value: 5,
        enabled: true,
      },
    ],
  },
  {
    name: "Indicadores Técnicos",
    weight: 30,
    enabled: true,
    criteria: [
      {
        name: "RSI",
        weight: 33,
        operator: "between",
        value: 30,
        maxValue: 70,
        enabled: true,
      },
      {
        name: "Média Móvel 200",
        weight: 33,
        operator: ">",
        value: 0,
        enabled: true,
      },
      {
        name: "Volume Médio",
        weight: 34,
        operator: ">",
        value: 1000000,
        enabled: true,
      },
    ],
  },
  {
    name: "Governança e Mercado",
    weight: 30,
    enabled: true,
    criteria: [
      {
        name: "Novo Mercado",
        weight: 40,
        operator: ">",
        value: 0,
        enabled: true,
      },
      {
        name: "Free Float",
        weight: 30,
        operator: ">",
        value: 25,
        enabled: true,
      },
      {
        name: "Valor de Mercado",
        weight: 30,
        operator: ">",
        value: 1000000000,
        enabled: true,
      },
    ],
  },
]

export function RatingCriteria() {
  const [criteriaGroups, setCriteriaGroups] = useState<CriteriaGroup[]>(defaultCriteriaGroups)

  const handleGroupWeightChange = (groupIndex: number, weight: number) => {
    const newGroups = [...criteriaGroups]
    newGroups[groupIndex].weight = weight
    setCriteriaGroups(newGroups)
  }

  const handleCriterionWeightChange = (groupIndex: number, criterionIndex: number, weight: number) => {
    const newGroups = [...criteriaGroups]
    newGroups[groupIndex].criteria[criterionIndex].weight = weight
    setCriteriaGroups(newGroups)
  }

  const handleGroupToggle = (groupIndex: number, enabled: boolean) => {
    const newGroups = [...criteriaGroups]
    newGroups[groupIndex].enabled = enabled
    setCriteriaGroups(newGroups)
  }

  const handleCriterionToggle = (groupIndex: number, criterionIndex: number, enabled: boolean) => {
    const newGroups = [...criteriaGroups]
    newGroups[groupIndex].criteria[criterionIndex].enabled = enabled
    setCriteriaGroups(newGroups)
  }

  const handleOperatorChange = (groupIndex: number, criterionIndex: number, operator: ">" | "<" | "between") => {
    const newGroups = [...criteriaGroups]
    newGroups[groupIndex].criteria[criterionIndex].operator = operator
    setCriteriaGroups(newGroups)
  }

  const handleValueChange = (groupIndex: number, criterionIndex: number, value: number, isMaxValue = false) => {
    const newGroups = [...criteriaGroups]
    if (isMaxValue) {
      newGroups[groupIndex].criteria[criterionIndex].maxValue = value
    } else {
      newGroups[groupIndex].criteria[criterionIndex].value = value
    }
    setCriteriaGroups(newGroups)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium">Critérios de Avaliação</h2>
          <p className="text-sm text-muted-foreground">
            Configure os critérios e pesos utilizados para avaliar as ações
          </p>
        </div>
        <Button>Salvar Alterações</Button>
      </div>

      {criteriaGroups.map((group, groupIndex) => (
        <Card key={group.name}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle>{group.name}</CardTitle>
                <CardDescription>Peso do grupo: {group.weight}%</CardDescription>
              </div>
              <Switch checked={group.enabled} onCheckedChange={(checked) => handleGroupToggle(groupIndex, checked)} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Peso do Grupo nos Critérios</Label>
                <Slider
                  value={[group.weight]}
                  onValueChange={([value]) => handleGroupWeightChange(groupIndex, value)}
                  min={0}
                  max={100}
                  step={5}
                />
              </div>
              <Separator className="my-4" />
              <div className="space-y-6">
                {group.criteria.map((criterion, criterionIndex) => (
                  <div key={criterion.name} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>{criterion.name}</Label>
                        <p className="text-sm text-muted-foreground">Peso no grupo: {criterion.weight}%</p>
                      </div>
                      <Switch
                        checked={criterion.enabled}
                        onCheckedChange={(checked) => handleCriterionToggle(groupIndex, criterionIndex, checked)}
                      />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label>Peso do Critério</Label>
                        <Slider
                          value={[criterion.weight]}
                          onValueChange={([value]) => handleCriterionWeightChange(groupIndex, criterionIndex, value)}
                          min={0}
                          max={100}
                          step={1}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Operador</Label>
                        <Select
                          value={criterion.operator}
                          onValueChange={(value: ">" | "<" | "between") =>
                            handleOperatorChange(groupIndex, criterionIndex, value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value=">">Maior que</SelectItem>
                            <SelectItem value="<">Menor que</SelectItem>
                            <SelectItem value="between">Entre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>{criterion.operator === "between" ? "Valor Mínimo" : "Valor"}</Label>
                        <Input
                          type="number"
                          value={criterion.value}
                          onChange={(e) => handleValueChange(groupIndex, criterionIndex, Number(e.target.value))}
                        />
                      </div>
                      {criterion.operator === "between" && (
                        <div className="space-y-2">
                          <Label>Valor Máximo</Label>
                          <Input
                            type="number"
                            value={criterion.maxValue}
                            onChange={(e) =>
                              handleValueChange(groupIndex, criterionIndex, Number(e.target.value), true)
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

