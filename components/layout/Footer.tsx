import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="sticky bottom-0 py-8 px-12 bg-secondary-foreground text-primary-foreground dark:bg-secondary dark:text-primary">
            <h1 className="text-8xl mb-8">
                <span className="font-amstelvar">S</span>avr
            </h1>
            <div className="flex justify-between">
                <p className="opacity-55">© Savr 2024. All rights reserved</p>
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
