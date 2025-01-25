'use server';

import { IndividualAccountsTable } from '../schema';
import { db } from '../';
import { eq } from 'drizzle-orm';

export async function getIndividualAccount(userId: string) {
    const account = await db.select().from(IndividualAccountsTable).where(eq(IndividualAccountsTable.user_id, userId));
    return account;
}
