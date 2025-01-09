import GoalsCard from '@/components/layout/dashboard/GoalsCard';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export default function page() {
    return (
        <section className="px-4 md:px-6 mb-4">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Goals</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">Set your goals and track your progress. Stay motivated and achieve your dreams.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <GoalsCard />
                <GoalsCard />
                <GoalsCard />
                <GoalsCard />
                <GoalsCard />
                <GoalsCard />

                <Card>
                    <div className="flex items-center justify-center h-full py-24">
                        <Plus size={40} className="text-muted-foreground" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
