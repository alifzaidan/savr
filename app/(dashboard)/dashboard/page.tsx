'use client';

import { AnalyticsExpenseChart } from '@/components/layout/dashboard/AnalyticsExpenseChart';
import { AnalyticsIncomeChart } from '@/components/layout/dashboard/AnalyticsIncomeChart';
import { RecentTransaction } from '@/components/layout/dashboard/RecentTransactions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TransitionPanel } from '@/components/ui/transition-panel';
import { useState } from 'react';

export default function page() {
    const [activeIndex, setActiveIndex] = useState(0);

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

    return (
        <section className="px-4 md:px-6 mb-4">
            <h1 className="font-amstelvar text-3xl mb-2">Welcome, Alif!</h1>
            <p className="mb-6 opacity-80 text-sm">Get insights into your spending habits and financial health.</p>

            <div>
                <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-2">
                            <div className="text-sm font-medium mb-4">Balance</div>
                            <div className="text-4xl font-bold">$60,231.89</div>
                        </div>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Incomes</CardTitle>
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
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+$45,231.89</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
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
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">-$2,350.78</div>
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
                                <div className="text-2xl font-bold">129</div>
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
                                <RecentTransaction />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
