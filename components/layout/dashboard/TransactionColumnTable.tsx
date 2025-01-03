'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

export type Transaction = {
    id: string;
    date: string;
    description: string;
    type: 'income' | 'expense';
    category: 'food' | 'transport' | 'utilities' | 'trip' | 'other';
    method: 'cash' | 'bri' | 'shopeepay' | 'gopay' | 'ovo' | 'dana';
    amount: number;
};

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: 'date',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'description',
        header: 'Description',
    },
    {
        accessorKey: 'type',
        header: 'Type',
        cell: ({ row }) => {
            const type = row.getValue('type');
            const variant = type === 'income' ? 'secondary' : 'default';
            return <Badge variant={variant}>{type === 'income' ? 'Income' : 'Expense'}</Badge>;
        },
    },
    {
        accessorKey: 'category',
        header: 'Category',
        cell: ({ row }) => {
            return <p className="capitalize">{row.getValue('category')}</p>;
        },
    },
    {
        accessorKey: 'method',
        header: 'Method',
        cell: ({ row }) => {
            return <p className="capitalize">{row.getValue('method')}</p>;
        },
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ row }) => {
            const type = row.getValue('type');
            const value = row.original.amount; // Misalnya ada kolom 'amount' dalam data
            const formattedValue = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(value);

            const colorClass = type === 'income' ? 'text-green-600' : '';

            return <p className={`font-bold ${colorClass}`}>{formattedValue}</p>;
        },
    },
    {
        id: 'actions',
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open action</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>See Detail</DropdownMenuItem>
                        <DropdownMenuItem className="text-green-700">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
