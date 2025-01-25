'use client';

import { AnalyticsExpenseChart } from '@/components/layout/dashboard/AnalyticsExpenseChart';
import { AnalyticsIncomeChart } from '@/components/layout/dashboard/AnalyticsIncomeChart';
import { RecentTransaction } from '@/components/layout/dashboard/RecentTransactions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TransitionPanel } from '@/components/ui/transition-panel';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { formatRupiah } from '@/lib/utils';
import {
    getAllIndividualTransactions,
    getTotalIndividualExpenses,
    getTotalIndividualIncomes,
    getTotalIndividualTransactions,
} from '@/db/actions/individualTransactions';
import { getUserData } from '@/db/actions/users';
import { getIndividualAccount } from '@/db/actions/individualAccounts';
import { Transaction } from '@/components/layout/dashboard/TransactionColumnTable';
import { getWalletsName } from '@/db/actions/wallet';
import { format } from 'date-fns';
import { Banknote, HandCoins } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

export default function page() {
    const { user } = useUser();
    const [activeIndex, setActiveIndex] = useState(0);
    const [userData, setUserData] = React.useState({ name: '', email: '' });
    const [balance, setBalance] = React.useState(0);
    const [totalIncome, setTotalIncome] = React.useState(0);
    const [totalExpense, setTotalExpense] = React.useState(0);
    const [totalTransaction, setTotalTransaction] = React.useState(0);
    const [transactionData, setTransactionData] = React.useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            // const users = await getUserData(userId);
            // const user = users[0];
            if (user) {
                setUserData({ name: user.firstName || '', email: user.emailAddresses[0].emailAddress || '' });
                const account = await getIndividualAccount(user?.id);
                if (account.length > 0) {
                    setBalance(account[0].balance);
                }
                const income = await getTotalIndividualIncomes(user?.id);
                setTotalIncome(Number(income));
                const expense = await getTotalIndividualExpenses(user?.id);
                setTotalExpense(Number(expense));
                const transaction = await getTotalIndividualTransactions(user?.id);
                setTotalTransaction(Number(transaction));
            }

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

            setIsLoading(false);
        }
        fetchData();
    }, []);

    const ITEMS = [
        {
            title: 'Income',
            chart: <AnalyticsIncomeChart />,
        },
        {
            title: 'Expenses',
            chart: <AnalyticsExpenseChart />,
        },
    ];

    if (isLoading) {
        return (
            <section className="px-4 md:px-6 mb-4">
                <Skeleton className="h-12 w-[250px] mb-2" />
                <Skeleton className="h-5 w-[500px] mb-6" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                    <Skeleton className="h-36" />
                    <Skeleton className="h-36" />
                    <Skeleton className="h-36" />
                    <Skeleton className="h-36" />
                </div>
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                    <Skeleton className="h-72" />
                    <Skeleton className="h-72" />
                </div>
            </section>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="px-4 md:px-6 mb-4"
        >
            <h1 className="font-amstelvar text-3xl mb-2">Welcome, {userData.name}!</h1>
            <p className="mb-6 opacity-80 text-sm">Get insights into your spending habits and financial health.</p>

            <div>
                <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-2">
                            <div className="text-sm font-medium mb-4">Balance</div>
                            <div className="text-4xl font-bold">{formatRupiah(balance)}</div>
                        </div>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Incomes</CardTitle>
                                <Banknote className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+{formatRupiah(totalIncome)}</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                                <HandCoins className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">-{formatRupiah(totalExpense)}</div>
                                <p className="text-xs text-muted-foreground">-80.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Transaction</CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                    <path d="M2 10h20" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{totalTransaction}</div>
                                <p className="text-xs text-muted-foreground">+19% from last month</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4 flex space-x-2">
                                    {ITEMS.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`rounded-md px-3 py-1 text-sm font-medium ${
                                                activeIndex === index
                                                    ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                                                    : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
                                            }`}
                                        >
                                            {item.title}
                                        </button>
                                    ))}
                                </div>
                                <TransitionPanel
                                    activeIndex={activeIndex}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    variants={{
                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                    }}
                                >
                                    {ITEMS.map((item, index) => (
                                        <div key={index}>{item.chart}</div>
                                    ))}
                                </TransitionPanel>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Transaction</CardTitle>
                                <CardDescription>You made 265 transaction this month.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentTransaction data={transactionData} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
