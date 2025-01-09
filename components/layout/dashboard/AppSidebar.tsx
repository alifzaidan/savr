'use client';

import * as React from 'react';
import { ChartArea, CircleDollarSign, Goal, LayoutDashboard, User, Users, WalletCards } from 'lucide-react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { AccountSwitcher } from './AccountSwitcher';
import { NavMain } from './NavMain';
import { NavUser } from './NavUser';
import { Separator } from '@/components/ui/separator';

const data = {
    user: {
        name: 'Muchammad Alif Zaidan',
        email: 'zaidanalif22710@gmail.com',
        avatar: '/avatars/shadcn.jpg',
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <NavUser user={data.user} />
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
