'use server';

import { IndividualTransactionsTable } from '../schema';
import { db } from '..';
import { and, count, eq, sum } from 'drizzle-orm';

export async function getTotalIndividualIncomes(accountId: number) {
    const totalIncomes = await db
        .select({ total: sum(IndividualTransactionsTable.amount) })
        .from(IndividualTransactionsTable)
        .where(and(eq(IndividualTransactionsTable.account_id, accountId), eq(IndividualTransactionsTable.type, 'Income')));

    return totalIncomes[0]?.total || 0;
}

export async function getTotalIndividualExpenses(accountId: number) {
    const totalExpenses = await db
        .select({ total: sum(IndividualTransactionsTable.amount) })
        .from(IndividualTransactionsTable)
        .where(and(eq(IndividualTransactionsTable.account_id, accountId), eq(IndividualTransactionsTable.type, 'Expense')));

    return totalExpenses[0]?.total || 0;
}

export async function getTotalIndividualTransactions(accountId: number) {
    const totalTransaction = await db
        .select({ total: count() })
        .from(IndividualTransactionsTable)
        .where(and(eq(IndividualTransactionsTable.account_id, accountId)));

    return totalTransaction[0]?.total || 0;
}
