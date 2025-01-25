import { text, serial, pgTable, timestamp, integer, uuid } from 'drizzle-orm/pg-core';

export const UsersTable = pgTable('users', {
    id: text('id').primaryKey().notNull(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    photo: text('photo').notNull(),
    created_at: timestamp('created_at').defaultNow(),
});

export const IndividualAccountsTable = pgTable('individual_accounts', {
    id: uuid('id').primaryKey().notNull(),
    user_id: text('user_id')
        .notNull()
        .references(() => UsersTable.id),
    balance: integer('balance').notNull().default(0),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});

export const IndividualTransactionsTable = pgTable('individual_transactions', {
    id: uuid('id').primaryKey().notNull(),
    user_id: text('user_id')
        .notNull()
        .references(() => IndividualAccountsTable.id),
    wallet_id: integer('wallet_id')
        .notNull()
        .references(() => WalletTable.id),
    amount: integer('amount').notNull(),
    description: text('description').notNull(),
    type: text('type').notNull(),
    category: text('category').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});

export const WalletTable = pgTable('wallet', {
    id: uuid('id').primaryKey().notNull(),
    user_id: text('user_id')
        .notNull()
        .references(() => IndividualAccountsTable.id),
    name: text('name').notNull(),
    account_name: text('account_name').notNull(),
    balance: integer('balance').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});

export const IndividualGoalsTable = pgTable('individual_goals', {
    id: uuid('id').primaryKey().notNull(),
    user_id: text('user_id')
        .notNull()
        .references(() => IndividualAccountsTable.id),
    target: integer('target').notNull(),
    description: text('description').notNull(),
    deadline: timestamp('deadline').notNull(),
    image: text('image').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});
