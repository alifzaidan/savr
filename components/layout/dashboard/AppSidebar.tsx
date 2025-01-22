'use client';

import * as React from 'react';
import { ChartArea, CircleDollarSign, Goal, LayoutDashboard, User, Users, WalletCards } from 'lucide-react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { AccountSwitcher } from './AccountSwitcher';
import { NavMain } from './NavMain';
import { NavUser } from './NavUser';
import { Separator } from '@/components/ui/separator';
import { getUserData } from '@/db/actions/users';
import { Skeleton } from '@/components/ui/skeleton';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [userData, setUserData] = React.useState({ name: '', email: '' });
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const users = await getUserData(1);
            const user = users[0];
            setUserData({ name: user.firstName + ' ' + user.lastName, email: user.email });

            setIsLoading(false);
        }
        fetchData();
    }, []);

    const data = {
        user: {
            name: userData.name,
            email: userData.email,
        },
        teams: [
            {
                name: 'Personal',
                logo: User,
                plan: 'Rp. 100.000',
            },
            {
                name: 'Shared',
                logo: Users,
                plan: '-',
            },
        ],
        navMain: [
            {
                title: 'Dashboard',
                url: '/dashboard',
                icon: LayoutDashboard,
                isActive: true,
            },
            {
                title: 'Transactions',
                url: '/transactions',
                icon: CircleDollarSign,
            },
            {
                title: 'Goals',
                url: '/goals',
                icon: Goal,
            },
            {
                title: 'Wallet',
                url: '/wallet',
                icon: WalletCards,
            },
            {
                title: 'Analytics',
                url: '/analytics',
                icon: ChartArea,
            },
        ],
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                {isLoading ? (
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <div className="space-y-2 w-3/4">
                            <Skeleton className="h-4" />
                            <Skeleton className="h-3" />
                        </div>
                    </div>
                ) : (
                    <NavUser user={data.user} />
                )}
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <Separator />
            <SidebarFooter>
                <AccountSwitcher teams={data.teams} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
