import { formatRupiah } from '@/lib/utils';
import { Transaction } from './TransactionColumnTable';

export function RecentTransaction({ data }: { data: Transaction[] }) {
    return (
        <div className="space-y-8">
            {data.map((transaction, index) => (
                <div key={index} className="flex items-center">
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.category}</p>
                    </div>
                    <div className={`ml-auto font-medium ${transaction.type === 'Income' ? 'text-green-600' : ''}`}>
                        {transaction.type === 'Income' ? `+${formatRupiah(transaction.amount)}` : `-${formatRupiah(transaction.amount)}`}
                    </div>
                </div>
            ))}
        </div>
    );
}
