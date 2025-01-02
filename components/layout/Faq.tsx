import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

export default function Faq() {
    return (
        <section className="max-w-6xl mx-auto pb-12">
            <h2 className="font-amstelvar text-3xl max-w-xl">FAQ</h2>
            <p className="max-w-xl mt-4 mb-8">
                Find answers to frequently asked questions about Savr and how we help you manage your finances effortlessly.
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
                            <div className="ml-2 text-primary dark:text-secondary">What is Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Savr is a financial planning and management application that helps you record income, expenses, set financial goals, and
                            track your financial progress, all in one easy-to-use platform.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cara-penggunaan" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">How do I start using Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            To start using Savr, simply sign up for a new account with your email and password. After that, you can begin adding
                            income, expenses, and setting the financial goals you want to achieve.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mata-uang" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Can I change the currency used in Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            At the moment, Savr only supports the IDR (Rupiah) currency. Other currencies are not yet available.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="aksesibilitas" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Can I access Savr on other devices?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Yes, Savr is accessible via the web and mobile apps, so you can monitor and manage your finances anytime, anywhere.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="koneksi-bank" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Can I connect my bank account to Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Currently, Savr supports manual transaction recording. A feature to connect your bank account will be available in future
                            updates.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="biaya" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-primary dark:text-secondary">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-secondary" />
                            <div className="ml-2 text-primary dark:text-secondary">Is there a subscription fee for using Savr?</div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="pl-6 pr-2 text-secondary0 dark:text-zinc-400">
                            Savr offers a free basic version. However, we will soon introduce a premium version with additional features that can be
                            accessed through a subscription fee.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}
