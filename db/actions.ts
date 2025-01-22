'use server';

import { CreateUserParams } from '@/types';
import { IndividualAccountsTable, IndividualGoalsTable, UsersTable, WalletTable } from './schema';
import { db } from '.';
import { handleError } from '@/lib/utils';
import { asc, eq } from 'drizzle-orm';

export async function createUser(user: CreateUserParams) {
    try {
        const newUser = await db.insert(UsersTable).values({
            id: Number(user.clerkId),
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            photo: user.photo,
        });
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error);
    }
}

export async function getUserData(userId: number) {
    const user = await db.select().from(UsersTable).where(eq(UsersTable.id, userId));
    return user;
}

export async function getIndividualAccount(userId: number) {
    const account = await db.select().from(IndividualAccountsTable).where(eq(IndividualAccountsTable.user_id, userId));
    return account;
}

export const getAllIndividualGoals = async () => {
    return await db.select().from(IndividualGoalsTable).orderBy(asc(IndividualGoalsTable.created_at));
};

export const getAllWallet = async () => {
    return await db.select().from(WalletTable).orderBy(asc(WalletTable.created_at));
};
