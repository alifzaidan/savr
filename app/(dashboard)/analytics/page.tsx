'use client';

import { AnalyticsExpenseChart } from '@/components/layout/dashboard/AnalyticsExpenseChart';
import { AnalyticsIncomeChart } from '@/components/layout/dashboard/AnalyticsIncomeChart';
import OverviewExpense from '@/components/layout/dashboard/OverviewExpense';
import OverviewIncome from '@/components/layout/dashboard/OverviewIncome';
import { Separator } from '@/components/ui/separator';
import { TransitionPanel } from '@/components/ui/transition-panel';
import { useState } from 'react';

export default function page() {
    const [activeIndex, setActiveIndex] = useState(0);

    const ITEMS = [
        {
            title: 'Income',
            overview: <OverviewIncome />,
            chart: <AnalyticsIncomeChart />,
        },
        {
            title: 'Expenses',
            overview: <OverviewExpense />,
            chart: <AnalyticsExpenseChart />,
        },
    ];

    return (
        <section className="px-4 md:px-6 mb-4">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Analytics</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">Get insights into your spending habits and financial health.</p>

            <div className="w-full bg-sidebar px-6 py-6 rounded-xl border border-border mb-6">
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
                <Separator className="mb-4" />
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
                        <div key={index} className="flex gap-6">
                            {item.overview}
                            {item.chart}
                        </div>
                    ))}
                </TransitionPanel>
            </div>
        </section>
    );
}
