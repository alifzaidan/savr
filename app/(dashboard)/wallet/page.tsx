'use client';

import WalletCard from '@/components/layout/dashboard/WalletCard';
import { columns, Wallet } from '@/components/layout/dashboard/WalletColumnTable';
import { WalletTable } from '@/components/layout/dashboard/WalletTable';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import React from 'react';

async function getData(): Promise<Wallet[]> {
    return [
        {
            id: '0',
            name: 'Cash',
            accountName: 'MUCHAMMAD ALIF ZAIDAN',
            lastTransaction: '2 days ago',
            amount: 1000000,
        },
        {
            id: '1',
            name: 'BRI Debit Card',
            accountName: 'MUCHAMMAD ALIF ZAIDAN',
            lastTransaction: '2 days ago',
            amount: 1000000,
        },
        {
            id: '2',
            name: 'BRIZZI',
            accountName: 'MUCHAMMAD ALIF ZAIDAN',
            lastTransaction: '1 week ago',
            amount: 500000,
        },
        {
            id: '3',
            name: 'Bank JAGO',
            accountName: 'MUCHAMMAD ALIF ZAIDAN',
            lastTransaction: '1 month ago',
            amount: 2000000,
        },
        {
            id: '4',
            name: 'ShopeePay',
            accountName: 'MUCHAMMAD ALIF ZAIDAN',
            lastTransaction: '1 month ago',
            amount: 2000000,
        },
        {
            id: '5',
            name: 'OVO',
            accountName: 'MUCHAMMAD ALIF ZAIDAN',
            lastTransaction: '1 month ago',
            amount: 2000000,
        },
        {
            id: '6',
            name: 'DANA',
            accountName: 'MUCHAMMAD ALIF ZAIDAN',
            lastTransaction: '1 month ago',
            amount: 2000000,
        },
    ];
}

export default function page() {
    const [data, setData] = React.useState<Wallet[]>([]);

    React.useEffect(() => {
        getData().then((data) => setData(data));
    }, []);

    return (
        <section className="px-4 md:px-6 mb-4">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Wallet</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">Manage your money and track your transactions.</p>

            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <WalletCard />
                <WalletCard />
                <WalletCard />

                <Card>
                    <div className="flex items-center justify-center h-full px-20">
                        <Plus size={32} className="text-muted-foreground" />
                    </div>
                </Card>
            </div>
            <WalletTable columns={columns} data={data} />
        </section>
    );
}
