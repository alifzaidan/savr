export default function DetailAnalytics({ title, amount, percentage }: { title: string; amount: number; percentage: number }) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-600"></div>
                <p className="font-medium">{title}</p>
            </div>
            <div className="text-right">
                <p className="font-medium">{amount}</p>
                <p className="text-sm text-muted-foreground">{percentage}%</p>
            </div>
        </div>
    );
}
