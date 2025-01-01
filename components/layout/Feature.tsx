import { Banknote, HandCoins, Target } from 'lucide-react';
import FeatureCard from '../ui/feature-card';

export default function Feature() {
    return (
        <section className="max-w-6xl mx-auto">
            <h2 className="font-amstelvar text-3xl max-w-xl">Pemasukan, Pengeluaran, Target. Blueprint Keuangan Anda.</h2>
            <p className="max-w-xl mt-4 mb-8">
                Pelajari bagaimana Savr menjaga pemasukan, pengeluaran, dan target keuangan Anda tetap terorganisir untuk keputusan yang lebih cerdas.
            </p>

            <div className="flex gap-20">
                <FeatureCard
                    title="Pemasukan"
                    subtitle="Catat semua sumber pemasukan dengan mudah, mulai dari gaji, bonus, hingga pendapatan tambahan."
                    icon={<Banknote strokeWidth="1.5" size="32" />}
                />
                <FeatureCard
                    title="Pengeluaran"
                    subtitle="Kelola dan kategori pengeluaran Anda agar lebih terstruktur dan sesuai dengan anggaran."
                    icon={<HandCoins strokeWidth="1.5" size="32" />}
                />
                <FeatureCard
                    title="Target"
                    subtitle="Tenttukan dan pantau target keuangan Anda, apakah itu menabung untuk liburan, membeli barang impian, atau mencapai tujuan keuangan jangka panjang."
                    icon={<Target strokeWidth="1.5" size="32" />}
                />
            </div>

            <div className="w-full max-w-6xl mx-auto border-t border-gray-300 my-20"></div>
        </section>
    );
}
