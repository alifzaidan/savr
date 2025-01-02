'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { TextShimmer } from '../ui/text-shimmer';
import { motion } from 'motion/react';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed md:w-full max-w-4xl top-0 left-1/2 transform -translate-x-1/2 mt-4 pl-8 pr-3 py-3 bg-zinc-300 bg-opacity-35 backdrop-blur-xl rounded-full z-50"
        >
            <div className="flex items-center justify-between gap-12">
                <h1 className="text-3xl">
                    <span className="font-amstelvar">S</span>avr
                </h1>

                <div className="flex font-amstelvar items-center gap-5">
                    <Link href="/about" className="font-medium border-b-2 border-transparent hover:border-primary transition duration-200">
                        About
                    </Link>
                    <div className="relative">
                        {/* <p className="absolute -top-2 -right-2 rotate-12 text-sm text-purple-700">Free</p> */}
                        <p className="opacity-50 font-medium border-b-2 border-transparent">Pricing</p>
                        <TextShimmer className="absolute -top-2 -right-2 rotate-12 text-sm text-purple-500" duration={1}>
                            Free
                        </TextShimmer>
                    </div>
                    <Button size="lg" className="font-mulish">
                        Sign in
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
