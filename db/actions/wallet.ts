'use server';

import { WalletTable } from '../schema';
import { db } from '../';
import { asc } from 'drizzle-orm';

export const getAllWallet = async () => {
    return await db.select().from(WalletTable).orderBy(asc(WalletTable.created_at));
};
