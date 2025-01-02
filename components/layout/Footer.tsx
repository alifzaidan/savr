import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="sticky bottom-0 py-6 md:py-8 px-8 md:px-12 bg-secondary-foreground text-primary-foreground dark:bg-secondary dark:text-primary">
            <h1 className="text-6xl md:text-8xl mb-8">
                <span className="font-amstelvar">S</span>avr
            </h1>
            <div className="flex flex-col md:flex-row gap-1 justify-between text-sm md:text-base">
                <p className="opacity-55 order-last md:order-first">© Savr 2024. All rights reserved</p>
                <Link href="/" className="opacity-55 hover:opacity-100 transition duration-200">
                    About
                </Link>
                <Link href="/" className="opacity-55 hover:opacity-100 transition duration-200">
                    Privacy policy
                </Link>
                <Link href="/" className="opacity-55 hover:opacity-100 transition duration-200">
                    Terms
                </Link>
            </div>
        </footer>
    );
}
