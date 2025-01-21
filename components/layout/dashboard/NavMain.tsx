'use client';

import { type LucideIcon } from 'lucide-react';

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import Link from 'next/link';

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
    }[];
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Welcome back!</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item, index) => (
                    <SidebarMenuItem key={index}>
                        <SidebarMenuButton tooltip={item.title} asChild>
                            <Link href={item.url}>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
