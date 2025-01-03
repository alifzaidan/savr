'use client';

import { columns, Payment } from '@/components/layout/dashboard/ColumnTable';
import { DataTable } from '@/components/layout/dashboard/DataTable';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { ChartColumnStacked, FileUp, Filter, PlusCircle } from 'lucide-react';
import React from 'react';

type Checked = DropdownMenuCheckboxItemProps['checked'];

async function getData(): Promise<Payment[]> {
    return [
        {
            id: '1',
            amount: 1200,
            status: 'pending',
            email: 'am@example.com',
        },
        {
            id: '2',
            amount: 1300,
            status: 'pending',
            email: 'dm@example.com',
        },
        {
            id: '3',
            amount: 1400,
            status: 'pending',
            email: 'cm@example.com',
        },
    ];
}

export default function page() {
    const [date, setDate] = React.useState<Date>();
    const [moneyIn, setMoneyIn] = React.useState<Checked>(true);
    const [moneyOut, setMoneyOut] = React.useState<Checked>(true);
    const [food, setFood] = React.useState<Checked>(true);
    const [transport, setTransport] = React.useState<Checked>(true);

    const [data, setData] = React.useState<Payment[]>([]);

    React.useEffect(() => {
        getData().then((data) => setData(data));
    }, []);

    return (
        <section className="px-4">
            <h1 className="font-amstelvar text-3xl mb-6">Transactions</h1>
            <div className="w-full bg-sidebar px-8 py-6 rounded-xl border border-border mb-6">
                <div className="flex justify-between">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="sm">
                                <Filter />
                                All filter
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Filter Transactions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                </DropdownMenuItem>
                                <DropdownMenuCheckboxItem checked={moneyIn} onCheckedChange={setMoneyIn}>
                                    Money In
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem checked={moneyOut} onCheckedChange={setMoneyOut}>
                                    Money Out
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <ChartColumnStacked />
                                        <span>Category</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuCheckboxItem checked={food} onCheckedChange={setFood}>
                                                Food
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem checked={transport} onCheckedChange={setTransport}>
                                                Transport
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <PlusCircle />
                                                <span>Add Category</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size="sm">
                        <FileUp />
                        Export
                    </Button>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-12">
                    <div>
                        <p className="text-sm opacity-50">Money in</p>
                        <h5 className="text-2xl font-semibold">Rp. 100.000</h5>
                    </div>
                    <div>
                        <p className="text-sm opacity-50">Money out</p>
                        <h5 className="text-2xl font-semibold">Rp. 50.000</h5>
                    </div>
                    <div>
                        <p className="text-sm opacity-50">Total Number</p>
                        <h5 className="text-2xl font-semibold">40</h5>
                    </div>
                </div>
            </div>
            <div className="w-full bg-sidebar px-8 py-6 rounded-xl border border-border">
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    );
}
