import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

export default function Faq() {
    return (
        <section className="max-w-6xl mx-auto pb-12">
            <h2 className="font-amstelvar text-3xl max-w-xl">FAQ</h2>
            <p className="max-w-xl mt-4 mb-8">
                Temukan jawaban atas pertanyaan yang sering diajukan tentang Savr dan cara kami membantu Anda mengelola keuangan dengan mudah.
            </p>

            <Accordion
                className="flex w-full flex-col"
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                variants={{
                    expanded: {
                        opacity: 1,
                        scale: 1,
                    },
                    collapsed: {
                        opacity: 0,
                        scale: 0.7,
                    },
                }}
            >
                <AccordionItem value="definisi" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Apa itu Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Savr adalah aplikasi perencanaan dan pengelolaan keuangan yang membantu Anda mencatat pemasukan, pengeluaran, menetapkan
                            target keuangan, dan melacak progres keuangan Anda dalam satu platform yang mudah digunakan.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cara-penggunaan" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Bagaimana cara mulai menggunakan Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Untuk mulai menggunakan Savr, cukup daftar akun baru dengan alamat email dan kata sandi. Setelah itu, Anda dapat mulai
                            menambahkan pemasukan, pengeluaran, serta menetapkan target keuangan yang ingin dicapai.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mata-uang" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Bisakah saya mengubah mata uang yang digunakan di Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Tidak, untuk saati ini Savr hanya memungkinkan Anda untuk menggunakan mata IDR (Rupiah), belum ada mata uang lainnya.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="aksesibilitas" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Bisakah saya mengakses Savr di perangkat lain?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Ya, Savr dapat diakses melalui web dan aplikasi seluler, sehingga Anda dapat memantau dan mengelola keuangan kapan saja
                            dan di mana saja.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="koneksi-bank" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Dapatkah saya menghubungkan akun bank saya ke Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Saat ini, Savr mendukung pencatatan transaksi manual. Fitur untuk menghubungkan akun bank ke aplikasi akan tersedia dalam
                            pembaruan mendatang.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="biaya" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Apakah ada biaya berlangganan untuk menggunakan Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Savr menawarkan versi dasar yang dapat digunakan secara gratis. Namun, dalam waktu segera kami akan menyediakan versi
                            premium dengan fitur tambahan yang dapat diakses dengan biaya berlangganan.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}
