import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image';

export default function WalletCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <p>BRI</p>
                    <EllipsisVertical size={16} />
                </CardTitle>
                <CardDescription>1234 5678 9012 3456</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <p className="text-sm text-start text-muted-foreground">123</p>
                    <p className="text-sm text-end text-muted-foreground">10/30</p>
                </div>
            </CardContent>
        </Card>
    );
}
