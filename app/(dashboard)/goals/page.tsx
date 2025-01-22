'use client';

import GoalsCard from '@/components/layout/dashboard/GoalsCard';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getAllIndividualGoals } from '@/db/actions/individualGoals';
import { formatDate } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react';

export default function page() {
    const [goalsData, setGoalsData] = React.useState<{ id: string; target: number; description: string; deadline: string; image: string }[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const goals = await getAllIndividualGoals();
            const formattedGoals = goals.map((goal) => ({
                id: goal.id.toString(),
                target: goal.target,
                description: goal.description,
                deadline: goal.deadline ? formatDate(goal.deadline.toString()) : '',
                image: goal.image,
            }));
            setGoalsData(formattedGoals);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <section className="px-4 md:px-6 mb-4">
                <Skeleton className="h-12 w-[250px] mb-2" />
                <Skeleton className="h-5 w-[500px] mb-6" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Skeleton className="h-60" />
                    <Skeleton className="h-60" />
                    <Skeleton className="h-60" />
                    <Skeleton className="h-60" />
                    <Skeleton className="h-60" />
                    <Skeleton className="h-60" />
                </div>
            </section>
        );
    }

    return (
        <section className="px-4 md:px-6 mb-4">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Goals</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">Set your goals and track your progress. Stay motivated and achieve your dreams.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {goalsData.map((goals, index) => (
                    <div key={index}>
                        <GoalsCard target={goals.target} description={goals.description} deadline={goals.deadline} />
                    </div>
                ))}

                <Card>
                    <div className="flex items-center justify-center h-full py-24">
                        <Plus size={40} className="text-muted-foreground" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
