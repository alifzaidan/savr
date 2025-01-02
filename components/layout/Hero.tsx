'use client';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, Transition, Variants } from 'motion/react';
import { useState, useEffect, Children } from 'react';
import { TextEffect } from '../ui/text-effect';
import { SpinningText } from '../ui/spinning-text';
import { MoveRight } from 'lucide-react';

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
        <main className="pt-24 p-8">
            <section
                className="relative mx-4 rounded-xl h-screen flex flex-col items-center"
                style={{
                    background: 'radial-gradient(circle, #EBE1FF, #E8ECFF, #EBE1FF)',
                }}
            >
                <TextEffect per="word" preset="fade" className="text-5xl text-center font-amstelvar max-w-3xl mt-28 mb-8">
                    Track your expenses, plan your budget, and achieve your financial goals all in one platform.
                </TextEffect>
                <TextEffect per="word" preset="fade" className="text-xl text-center">
                    Manage your finances easily and efficiently.
                </TextEffect>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mt-8"
                >
                    <Button size="lg">
                        Get Started <MoveRight />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute -bottom-44 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-96 bg-zinc-100 rounded-xl"
                >
                    <SpinningText radius={5} fontSize={1.2} className="absolute right-0 top-0 font-medium leading-none font-amstelvar">
                        {`Easily • Quickly • Effectively •`}
                    </SpinningText>
                </motion.div>
            </section>
            <h2 className="font-amstelvar text-3xl mt-52 text-center mx-auto max-w-2xl">
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
            <div className="w-full max-w-6xl mx-auto border-t border-gray-300 my-20"></div>
        </main>
    );
}
