'use server';

import { CreateUserParams } from '@/types';
import { UsersTable } from './schema';
import { db } from '.';
import { handleError } from '@/lib/utils';

export async function createUser(user: CreateUserParams) {
    try {
        const newUser = await db.insert(UsersTable).values(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error);
    }
}
