'use server';

import { IndividualTransactionsTable } from '../schema';
import { db } from '..';
import { and, asc, count, eq, sum } from 'drizzle-orm';

export const getAllIndividualTransactions = async () => {
    return await db.select().from(IndividualTransactionsTable).orderBy(asc(IndividualTransactionsTable.created_at));
};

export async function getTotalIndividualIncomes(userId: string) {
    const totalIncomes = await db
        .select({ total: sum(IndividualTransactionsTable.amount) })
        .from(IndividualTransactionsTable)
        .where(and(eq(IndividualTransactionsTable.user_id, userId), eq(IndividualTransactionsTable.type, 'Income')));

    return totalIncomes[0]?.total || 0;
}

export async function getTotalIndividualExpenses(userId: string) {
    const totalExpenses = await db
        .select({ total: sum(IndividualTransactionsTable.amount) })
        .from(IndividualTransactionsTable)
        .where(and(eq(IndividualTransactionsTable.user_id, userId), eq(IndividualTransactionsTable.type, 'Expense')));

    return totalExpenses[0]?.total || 0;
}

export async function getTotalIndividualTransactions(userId: string) {
    const totalTransaction = await db
        .select({ total: count() })
        .from(IndividualTransactionsTable)
        .where(and(eq(IndividualTransactionsTable.user_id, userId)));

    return totalTransaction[0]?.total || 0;
}
