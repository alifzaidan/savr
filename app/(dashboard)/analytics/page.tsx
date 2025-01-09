import { AnalyticsChart } from '@/components/layout/dashboard/AnalyticsChart';
import DetailAnalytics from '@/components/layout/dashboard/DetailAnalytics';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ChevronUp } from 'lucide-react';

export default function page() {
    return (
        <section className="px-4 md:px-6 mb-4">
            <h1 className="font-amstelvar text-3xl mb-2 ml-4">Analytics</h1>
            <p className="mb-6 opacity-80 text-sm ml-4">Get insights into your spending habits and financial health.</p>

            <div className="w-full bg-sidebar flex flex-col px-6 py-6 rounded-xl border border-border mb-6">
                <div className="w-full flex gap-6 bg-background p-6 border border-border rounded-xl">
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
                    <AnalyticsChart />
                </div>
            </div>
        </section>
    );
}
