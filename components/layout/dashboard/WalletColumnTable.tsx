'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

export type Wallet = {
    id: string;
    name: string;
    accountName: string;
    lastTransaction: string;
    amount: number;
};

export const columns: ColumnDef<Wallet>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <Badge>{row.getValue('name')}</Badge>;
        },
    },
    {
        accessorKey: 'accountName',
        header: 'Account Name',
        cell: ({ row }) => {
            return <Badge variant={'secondary'}>{row.getValue('accountName')}</Badge>;
        },
    },
    {
        accessorKey: 'lastTransaction',
        header: 'Last Transaction',
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ row }) => {
            const type = row.getValue('type');
            const value = row.original.amount;
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
                        <DropdownMenuItem>Manage</DropdownMenuItem>
                        <DropdownMenuItem>Limit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
