'use client';

import * as React from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { DataTablePagination } from './DataTablePagination';
import { DataTableToolbar } from './TransactionsTableToolbar';
import { Separator } from '@/components/ui/separator';
import { formatRupiah } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface TransactionsTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    totalIncome: number;
    totalExpense: number;
    totalTransaction: number;
}

export function TransactionsTable<TData, TValue>({
    columns,
    data,
    totalIncome,
    totalExpense,
    totalTransaction,
}: TransactionsTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
        <>
            <div className="w-full bg-sidebar flex flex-col px-8 py-6 rounded-xl border border-border mb-6">
                <DataTableToolbar table={table} />
                <Separator className="my-4" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-first md:order-last">
                    <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-16 text-center lg:text-left">
                        <div>
                            <p className="text-xs md:text-sm opacity-50">Money in</p>
                            <h5 className="text-2xl md:text-3xl font-semibold">{formatRupiah(totalIncome)}</h5>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm opacity-50">Money out</p>
                            <h5 className="text-2xl md:text-3xl font-semibold">{formatRupiah(totalExpense)}</h5>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm opacity-50">Total Transaction</p>
                            <h5 className="text-2xl md:text-3xl font-semibold">{totalTransaction}</h5>
                        </div>
                    </div>
                    <Button variant="default" size="sm">
                        <Plus />
                        Add Transaction
                    </Button>
                </div>
            </div>
            <div className="w-full bg-sidebar px-8 py-6 space-y-4 rounded-xl border border-border">
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id} colSpan={header.colSpan}>
                                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <DataTablePagination table={table} />
            </div>
        </>
    );
}
