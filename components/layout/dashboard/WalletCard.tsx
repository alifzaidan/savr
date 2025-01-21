import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EllipsisVertical } from 'lucide-react';

export default function WalletCard({ name, account_name }: { name: string; account_name: string }) {
    return (
        <Card className="w-60">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <p>{name}</p>
                    <EllipsisVertical size={16} />
                </CardTitle>
                <CardDescription>{account_name}</CardDescription>
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
