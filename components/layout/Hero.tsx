'use client';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, Transition, Variants } from 'motion/react';
import { useState, useEffect, Children } from 'react';
import { TextEffect } from '../ui/text-effect';
import { SpinningText } from '../ui/spinning-text';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

type TextLoopProps = {
    children: React.ReactNode[];
    className?: string;
    interval?: number;
    transition?: Transition;
    variants?: Variants;
    onIndexChange?: (index: number) => void;
};

export default function Hero({ children, className, interval = 2, transition = { duration: 0.3 }, variants, onIndexChange }: TextLoopProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = Children.toArray(children);

    useEffect(() => {
        const intervalMs = interval * 1000;

        const timer = setInterval(() => {
            setCurrentIndex((current) => {
                const next = (current + 1) % items.length;
                onIndexChange?.(next);
                return next;
            });
        }, intervalMs);
        return () => clearInterval(timer);
    }, [items.length, interval, onIndexChange]);

    const motionVariants: Variants = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
    };
    return (
        <main className="pt-24 px-4 lg:px-8">
            <section
                className="relative p-8 rounded-xl h-screen flex flex-col items-center"
                style={{
                    background: 'radial-gradient(circle, #EBE1FF, #E8ECFF, #EBE1FF)',
                }}
            >
                <TextEffect
                    per="word"
                    preset="fade"
                    className="text-3xl sm:text-4xl lg:text-5xl text-center font-amstelvar max-w-3xl mt-12 md:mt-20 lg:mt-28 mb-4 md:mb-8"
                >
                    Track your expenses, plan your budget, and achieve your financial goals all in one platform.
                </TextEffect>
                <TextEffect per="word" preset="fade" className="text-base md:text-xl text-center">
                    Manage your finances easily and efficiently.
                </TextEffect>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mt-6 md:mt-8"
                >
                    <Button size="lg" asChild>
                        <Link href="/dashboard">
                            Get Started <MoveRight />
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute -bottom-32 lg:-bottom-44 left-1/2 transform -translate-x-1/2 w-2/3 lg:w-full max-w-3xl h-96 bg-zinc-100 rounded-xl"
                >
                    <SpinningText
                        radius={5}
                        fontSize={1.2}
                        className="absolute hidden md:block right-0 top-0 font-medium leading-none font-amstelvar"
                    >
                        {`Easily • Quickly • Effectively •`}
                    </SpinningText>
                    <SpinningText
                        radius={4.5}
                        fontSize={1}
                        className="absolute block md:hidden right-0 top-0 font-medium leading-none font-amstelvar"
                    >
                        {`Easily • Quickly • Effectively •`}
                    </SpinningText>
                </motion.div>
            </section>
            <h2 className="font-amstelvar text-xl md:text-2xl lg:text-3xl mt-40 lg:mt-52 text-center mx-auto max-w-lg lg:max-w-2xl">
                With Savr, you can manage your finances in a way that's more{' '}
                <span className={cn('relative inline-block whitespace-nowrap', className)}>
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={transition}
                            variants={variants || motionVariants}
                        >
                            {items[currentIndex]}
                        </motion.div>
                    </AnimatePresence>
                </span>
            </h2>
            <div className="w-full max-w-6xl mx-auto border-t border-gray-300 my-12 md:my-20"></div>
        </main>
    );
}
