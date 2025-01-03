'use client';

import { Table } from '@tanstack/react-table';
import { Banknote, Bike, CreditCard, FileUp, Flame, HandCoins, Landmark, Pizza, Plane, Ruler, Smartphone, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './TransactionsTableViewOptions';
import { DataTableFacetedFilter } from './TransactionTableFacetedFilter';

export const type = [
    {
        value: 'income',
        label: 'Income',
        icon: Banknote,
    },
    {
        value: 'expense',
        label: 'Expense',
        icon: HandCoins,
    },
];

export const category = [
    {
        value: 'food',
        label: 'Food',
        icon: Pizza,
    },
    {
        value: 'transport',
        label: 'Transport',
        icon: Bike,
    },
    {
        value: 'utilities',
        label: 'Utilities',
        icon: Ruler,
    },
    {
        value: 'trip',
        label: 'Trip',
        icon: Plane,
    },
    {
        value: 'other',
        label: 'Other',
        icon: Flame,
    },
];

export const method = [
    {
        value: 'cash',
        label: 'Cash',
        icon: Banknote,
    },
    {
        value: 'bri',
        label: 'BRI',
        icon: Landmark,
    },
    {
        value: 'brizzi',
        label: 'BRIZZI',
        icon: CreditCard,
    },
    {
        value: 'shopeepay',
        label: 'ShopeePay',
        icon: Smartphone,
    },
    {
        value: 'gopay',
        label: 'GoPay',
        icon: Smartphone,
    },
    {
        value: 'ovo',
        label: 'OVO',
        icon: Smartphone,
    },
    {
        value: 'dana',
        label: 'DANA',
        icon: Smartphone,
    },
];

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex items-center justify-between order-last md:order-first">
            <div className="flex flex-col md:flex-row gap-3 flex-1 items-center space-x-2">
                <Input
                    placeholder="Search transactions..."
                    value={(table.getColumn('description')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('description')?.setFilterValue(event.target.value)}
                    className="max-w-sm text-sm md:text-base"
                />
                <div>
                    {table.getColumn('type') && <DataTableFacetedFilter column={table.getColumn('type')} title="Type" options={type} />}
                    {table.getColumn('category') && (
                        <DataTableFacetedFilter column={table.getColumn('category')} title="Category" options={category} />
                    )}
                    {table.getColumn('method') && <DataTableFacetedFilter column={table.getColumn('method')} title="Method" options={method} />}
                    {isFiltered && (
                        <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
                            Reset
                            <X />
                        </Button>
                    )}
                </div>
                <Button size="sm" className="lg:hidden flex">
                    <FileUp />
                    Export
                </Button>
            </div>
            <div className="flex gap-2">
                <Button size="sm" className="hidden lg:flex">
                    <FileUp />
                    Export
                </Button>
                <DataTableViewOptions table={table} />
            </div>
        </div>
    );
}
