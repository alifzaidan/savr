import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentTransaction() {
    return (
        <div className="space-y-8">
            <div className="flex items-center">
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Beli Gacoan</p>
                    <p className="text-sm text-muted-foreground">Makanan</p>
                </div>
                <div className="ml-auto font-medium">-Rp. 20.000</div>
            </div>
            <div className="flex items-center">
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Beli Monitor</p>
                    <p className="text-sm text-muted-foreground">Kebutuhan</p>
                </div>
                <div className="ml-auto font-medium">-Rp. 800.000</div>
            </div>
            <div className="flex items-center">
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Gajian</p>
                    <p className="text-sm text-muted-foreground">Other</p>
                </div>
                <div className="ml-auto font-medium">+Rp. 1.000.000</div>
            </div>
        </div>
    );
}
