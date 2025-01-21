'use client';

import WalletCard from '@/components/layout/dashboard/WalletCard';
import { columns, Wallet } from '@/components/layout/dashboard/WalletColumnTable';
import { WalletTable } from '@/components/layout/dashboard/WalletTable';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getAllWallet } from '@/db/actions';
import { formatDate } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react';

export default function page() {
    const [walletData, setWalletData] = React.useState<{ id: string; name: string; accountName: string; amount: number; lastTransaction: string }[]>(
        []
    );
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const wallets = await getAllWallet();
            const formattedWallets = wallets.map((wallet) => ({
                id: wallet.id.toString(),
                name: wallet.name,
                accountName: wallet.account_name,
                amount: wallet.balance,
                lastTransaction: wallet.updated_at ? formatDate(wallet.updated_at.toString()) : '',
            }));
            setWalletData(formattedWallets);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <section className="px-4 md:px-6 mb-4">
                <Skeleton className="h-12 w-[250px] mb-2" />
                <Skeleton className="h-5 w-[500px] mb-6" />
                <div className="flex gap-4 md:flex-row flex-col mb-6">
                    <Skeleton className="h-32 w-52" />
                    <Skeleton className="h-32 w-52" />
                    <Skeleton className="h-32 w-52" />
                    <Skeleton className="h-32 w-52" />
                </div>

                <Skeleton className="h-80 w-full" />
            </section>
        );
    }

    return (
        <section className="px-4 md:px-6 mb-4">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Wallet</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">Manage your money and track your transactions.</p>

            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                {walletData.map((wallet, index) => (
                    <div key={index}>
                        <WalletCard name={wallet.name} account_name={wallet.accountName} />
                    </div>
                ))}

                <Card>
                    <div className="flex items-center justify-center h-full px-20">
                        <Plus size={32} className="text-muted-foreground" />
                    </div>
                </Card>
            </div>
            <WalletTable columns={columns} data={walletData} />
        </section>
    );
}
