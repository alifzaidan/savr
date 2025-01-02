import { Banknote, Goal, HandCoins } from 'lucide-react';
import FeatureCard from '../ui/feature-card';

export default function Feature() {
    return (
        <section className="max-w-6xl mx-auto">
            <h2 className="font-amstelvar text-3xl max-w-xl">Income, Expenses, Goals. Your Financial Blueprint.</h2>
            <p className="max-w-xl mt-4 mb-8">
                Learn how Savr keeps your income, expenses, and financial goals organized for smarter decision-making.
            </p>

            <div className="flex gap-20">
                <FeatureCard
                    title="Income"
                    subtitle="Easily track all income sources, from salaries and bonuses to additional earnings."
                    icon={<Banknote strokeWidth="1.5" size="32" />}
                />
                <FeatureCard
                    title="Expenses"
                    subtitle="Manage and categorize your expenses to stay organized and within your budget."
                    icon={<HandCoins strokeWidth="1.5" size="32" />}
                />
                <FeatureCard
                    title="Goals"
                    subtitle="Set and track your financial goals, whether saving for a vacation, a dream purchase, or long-term objectives."
                    icon={<Goal strokeWidth="1.5" size="32" />}
                />
            </div>

            <div className="w-full max-w-6xl mx-auto border-t border-gray-300 my-20"></div>
        </section>
    );
}
