import { db } from '@/db';
import { UsersTable } from '@/db/schema';
import { currentUser } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        console.log('no user');
        return null;
    }

    const loggedInUser = await db.select().from(UsersTable).where(eq(UsersTable.id, user.id));

    if (loggedInUser.length > 0) {
        console.log('user found');
        return loggedInUser;
    }

    const newUser = await db.insert(UsersTable).values({
        id: user.id || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        username: user.username || '',
        email: user.emailAddresses[0].emailAddress || '',
        photo: user.imageUrl || '',
    });

    console.log('user created');

    return newUser;
};
