import { MoveRight } from 'lucide-react';
import { Button } from './button';
import { ReactNode } from 'react';

export default function FeatureCard({ title, subtitle, icon }: { title: string; subtitle: string; icon: ReactNode }) {
    return (
        <div className="py-5 rounded-xl flex-1">
            {icon}
            <h3 className="font-amstelvar text-xl mt-2">{title}</h3>
            <p className="text-sm mt-2 mb-4">{subtitle}</p>
            <Button>
                See Example <MoveRight />
            </Button>
        </div>
    );
}
