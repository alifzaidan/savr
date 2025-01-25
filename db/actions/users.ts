'use server';

import { UsersTable } from '../schema';
import { db } from '../';
import { eq } from 'drizzle-orm';

export async function getUserData(userId: string) {
    const user = await db.select().from(UsersTable).where(eq(UsersTable.id, userId));
    return user;
}
