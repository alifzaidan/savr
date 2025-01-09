export default function DetailAnalytics({ title, amount, percentage }: { title: string; amount: number; percentage: number }) {
    const formattedAmount = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
    return (
        <div className="flex justify-between gap-16">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-600"></div>
                <p className="text-sm font-medium">{title}</p>
            </div>
            <div className="text-right">
                <p className="text-sm font-medium">{formattedAmount}</p>
                <p className="text-xs text-muted-foreground">{percentage}%</p>
            </div>
        </div>
    );
}
