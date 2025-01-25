import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';

export const metadata: Metadata = {
    title: 'Savr - Manage your finances easily and efficiently.',
    description: 'Track your expenses, plan your budget, and achieve your financial goals all in one platform.',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await checkUser();
    console.log(user && Array.isArray(user) && user[0]?.id ? user[0].id : []);

    return (
        <ClerkProvider>
            <html lang="en">
                <body className="font-mulish bg-primary antialiased">
                    <div>{children}</div>
                </body>
            </html>
        </ClerkProvider>
    );
}
