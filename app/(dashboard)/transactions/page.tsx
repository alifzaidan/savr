'use client';

import { columns, Transaction } from '@/components/layout/dashboard/TransactionColumnTable';
import { DataTable } from '@/components/layout/dashboard/TransactionsTable';
import React from 'react';

async function getData(): Promise<Transaction[]> {
    return [
        {
            id: '1',
            date: '2022-01-01',
            description: 'Buy some food',
            type: 'expense',
            category: 'food',
            method: 'cash',
            amount: -10000,
        },
        {
            id: '2',
            date: '2022-01-02',
            description: 'Ticket to go home',
            type: 'expense',
            category: 'transport',
            method: 'bri',
            amount: -20000,
        },
        {
            id: '3',
            date: '2022-01-03',
            description: 'Gajian',
            type: 'income',
            category: 'other',
            method: 'bri',
            amount: 30000,
        },
        {
            id: '4',
            date: '2022-01-04',
            description: 'Buy paper',
            type: 'expense',
            category: 'utilities',
            method: 'cash',
            amount: -40000,
        },
        {
            id: '5',
            date: '2022-01-05',
            description: 'Buy some food',
            type: 'expense',
            category: 'food',
            method: 'cash',
            amount: -50000,
        },
        {
            id: '6',
            date: '2022-01-06',
            description: 'Ticket to go home',
            type: 'expense',
            category: 'transport',
            method: 'bri',
            amount: -60000,
        },
        {
            id: '7',
            date: '2022-01-07',
            description: 'Gajian',
            type: 'income',
            category: 'other',
            method: 'bri',
            amount: 70000,
        },
        {
            id: '8',
            date: '2022-01-08',
            description: 'Buy paper',
            type: 'expense',
            category: 'utilities',
            method: 'cash',
            amount: -80000,
        },
        {
            id: '9',
            date: '2022-01-09',
            description: 'Buy some food',
            type: 'expense',
            category: 'food',
            method: 'cash',
            amount: -90000,
        },
    ];
}

export default function page() {
    const [data, setData] = React.useState<Transaction[]>([]);

    React.useEffect(() => {
        getData().then((data) => setData(data));
    }, []);

    return (
        <section className="px-4 md:px-6">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Transactions</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">View your transaction history effortlessly and stay on top of your finances.</p>
            <DataTable columns={columns} data={data} />
        </section>
    );
}
