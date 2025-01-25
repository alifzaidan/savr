'use client';

import { columns } from '@/components/layout/dashboard/TransactionColumnTable';
import { TransactionsTable } from '@/components/layout/dashboard/TransactionsTable';
import { Skeleton } from '@/components/ui/skeleton';
import {
    getAllIndividualTransactions,
    getTotalIndividualExpenses,
    getTotalIndividualIncomes,
    getTotalIndividualTransactions,
} from '@/db/actions/individualTransactions';
import React from 'react';
import { Transaction } from '@/components/layout/dashboard/TransactionColumnTable';
import { format } from 'date-fns';
import { getWalletsName } from '@/db/actions/wallet';
import { useUser } from '@clerk/nextjs';

export default function page() {
    const { user } = useUser();
    const [transactionData, setTransactionData] = React.useState<Transaction[]>([]);
    const [totalIncome, setTotalIncome] = React.useState(0);
    const [totalExpense, setTotalExpense] = React.useState(0);
    const [totalTransaction, setTotalTransaction] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const walletMap = await getWalletsName();
            const transactions = await getAllIndividualTransactions();
            const formattedTransactions = transactions.map((transaction) => ({
                id: transaction.id.toString(),
                date: transaction.created_at ? format(transaction.created_at.toString(), 'PP') : '',
                description: transaction.description,
                type: transaction.type,
                category: transaction.category,
                method: walletMap[transaction.wallet_id] || 'Unknown',
                amount: transaction.amount,
            }));
            setTransactionData(formattedTransactions);
            if (user) {
                const income = await getTotalIndividualIncomes(user?.id);
                setTotalIncome(Number(income));
                const expense = await getTotalIndividualExpenses(user?.id);
                setTotalExpense(Number(expense));
                const transaction = await getTotalIndividualTransactions(user?.id);
                setTotalTransaction(Number(transaction));
            }

            setIsLoading(false);
        }
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <section className="px-4 md:px-6 mb-4">
                <Skeleton className="h-12 w-[250px] mb-2" />
                <Skeleton className="h-5 w-[500px] mb-6" />
                <Skeleton className="h-36 w-full mb-6" />
                <Skeleton className="h-72 w-full" />
            </section>
        );
    }

    return (
        <section className="px-4 md:px-6">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Transactions</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">View your transaction history effortlessly and stay on top of your finances.</p>
            <TransactionsTable
                columns={columns}
                data={transactionData}
                totalIncome={totalIncome}
                totalExpense={totalExpense}
                totalTransaction={totalTransaction}
            />
        </section>
    );
}
