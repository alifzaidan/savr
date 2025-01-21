'use server';

import { CreateUserParams } from '@/types';
import { UsersTable } from './schema';
import { db } from '.';
import { handleError } from '@/lib/utils';
import { eq } from 'drizzle-orm';

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
