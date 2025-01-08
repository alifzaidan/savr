import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

export default function GoalsCard() {
    return (
        <Card>
            <CardHeader className="pb-4">
                <Image src="/images/image-dummy.png" alt="Placeholder" width={300} height={200} className="w-full h-32 object-cover mb-3" />
                <CardTitle>Buy a new monitor</CardTitle>
                <CardDescription>Desember 2025</CardDescription>
            </CardHeader>
            <CardContent>
                <Progress value={33} />
                <div className="flex justify-between mt-1">
                    <p className="text-sm text-start text-muted-foreground">Rp. 500.000</p>
                    <p className="text-sm text-end text-muted-foreground">Rp. 1.000.000</p>
                </div>
            </CardContent>
        </Card>
    );
}
