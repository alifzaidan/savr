import DetailAnalytics from '@/components/layout/dashboard/DetailAnalytics';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ChevronUp } from 'lucide-react';

export default function OverviewIncome() {
    return (
        <Card className="flex flex-col gap-4 p-6 border border-border rounded-xl">
            <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-1">Overview</p>
                <h3 className="font-amstelvar text-2xl">Rp. 1.000.000</h3>
                <div className="flex gap-2 items-center mt-3">
                    <Badge variant={'default'}>
                        <ChevronUp size={12} className="mr-1" strokeWidth={4} />
                        10%
                    </Badge>
                    <p className="text-xs text-muted-foreground mb-1">Last 10 days</p>
                </div>
                <Progress value={10} className="my-6" />
                <div>
                    <DetailAnalytics title="Gajian" amount={1000000} percentage={10} />
                    <Separator className="my-4" />
                    <DetailAnalytics title="THR" amount={1000000} percentage={10} />
                </div>
            </div>
            <Button variant="secondary" className="w-full">
                Edit Limits
            </Button>
        </Card>
    );
}
