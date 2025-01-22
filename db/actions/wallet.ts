'use server';

import { WalletTable } from '../schema';
import { db } from '../';
import { asc } from 'drizzle-orm';

export const getAllWallet = async () => {
    return await db.select().from(WalletTable).orderBy(asc(WalletTable.created_at));
};

export async function getWalletsName() {
    const wallets = await db
        .select({
            id: WalletTable.id,
            name: WalletTable.name,
        })
        .from(WalletTable);

    return wallets.reduce((map, wallet) => {
        map[wallet.id.toString()] = wallet.name;
        return map;
    }, {} as Record<string, string>);
}
