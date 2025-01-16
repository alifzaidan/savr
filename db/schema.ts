import { text, serial, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    created_at: timestamp('created_at').defaultNow(),
});
