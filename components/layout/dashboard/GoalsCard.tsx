import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatRupiah } from '@/lib/utils';
import Image from 'next/image';

export default function GoalsCard({ target, description, deadline }: { target: number; description: string; deadline: string }) {
    return (
        <Card>
            <CardHeader className="pb-4">
                <Image src="/images/image-dummy.png" alt="Placeholder" width={300} height={200} className="w-full h-32 object-cover mb-3" />
                <CardTitle>{description}</CardTitle>
                <CardDescription>{deadline}</CardDescription>
            </CardHeader>
            <CardContent>
                <Progress value={33} />
                <div className="flex justify-between mt-1">
                    <p className="text-sm text-start text-muted-foreground">Rp. 500.000</p>
                    <p className="text-sm text-end text-muted-foreground">{formatRupiah(target)}</p>
                </div>
            </CardContent>
        </Card>
    );
}
