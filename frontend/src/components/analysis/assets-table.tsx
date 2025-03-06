"use client"

import * as React from "react"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/src/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Input } from "@/src/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"

type Asset = {
  codigo: string
  empresa: string
  setor: string
  preco: number
  variacao: number
  pl: number
  pvp: number
  dy: number
}

const data: Asset[] = [
  {
    codigo: "PETR4",
    empresa: "Petrobras",
    setor: "Petróleo e Gás",
    preco: 35.82,
    variacao: 1.25,
    pl: 3.2,
    pvp: 1.1,
    dy: 12.5,
  },
  {
    codigo: "VALE3",
    empresa: "Vale",
    setor: "Mineração",
    preco: 68.9,
    variacao: -0.8,
    pl: 4.5,
    pvp: 1.8,
    dy: 8.2,
  },
  {
    codigo: "ITUB4",
    empresa: "Itaú Unibanco",
    setor: "Financeiro",
    preco: 32.54,
    variacao: 0.5,
    pl: 8.9,
    pvp: 2.1,
    dy: 5.8,
  },
  {
    codigo: "BBDC4",
    empresa: "Bradesco",
    setor: "Financeiro",
    preco: 15.32,
    variacao: -1.2,
    pl: 7.8,
    pvp: 1.5,
    dy: 6.7,
  },
  {
    codigo: "WEGE3",
    empresa: "WEG",
    setor: "Bens Industriais",
    preco: 42.15,
    variacao: 2.1,
    pl: 25.6,
    pvp: 6.8,
    dy: 1.2,
  },
]

export const columns: ColumnDef<Asset>[] = [
  {
    accessorKey: "codigo",
    header: "Código",
    cell: ({ row }) => <div className="font-medium">{row.getValue("codigo")}</div>,
  },
  {
    accessorKey: "empresa",
    header: "Empresa",
  },
  {
    accessorKey: "setor",
    header: "Setor",
  },
  {
    accessorKey: "preco",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Preço
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("preco"))
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "variacao",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Variação
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("variacao"))
      const formatted = `${amount.toFixed(2)}%`

      return (
        <div className={`text-right font-medium ${amount >= 0 ? "text-green-500" : "text-red-500"}`}>{formatted}</div>
      )
    },
  },
  {
    accessorKey: "pl",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          P/L
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("pl"))
      return <div className="text-right font-medium">{amount.toFixed(1)}</div>
    },
  },
  {
    accessorKey: "pvp",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          P/VP
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("pvp"))
      return <div className="text-right font-medium">{amount.toFixed(1)}</div>
    },
  },
  {
    accessorKey: "dy",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          DY
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("dy"))
      return <div className="text-right font-medium">{amount.toFixed(1)}%</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const asset = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Adicionar à carteira</DropdownMenuItem>
            <DropdownMenuItem>Comparar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function AssetsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar ativos..."
          value={(table.getColumn("codigo")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("codigo")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Nenhum resultado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground text-sm">
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </div>
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Anterior
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Próxima
        </Button>
      </div>
    </div>
  )
}

