import { text, serial, pgTable, timestamp, integer } from 'drizzle-orm/pg-core';

export const UsersTable = pgTable('users', {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    created_at: timestamp('created_at').defaultNow(),
});

export const IndividualAccountsTable = pgTable('individual_accounts', {
    id: serial('id').primaryKey().notNull(),
    user_id: integer('user_id')
        .notNull()
        .references(() => UsersTable.id),
    balance: integer('balance').notNull().default(0),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});
