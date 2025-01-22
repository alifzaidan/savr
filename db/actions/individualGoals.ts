'use server';

import { IndividualGoalsTable } from '../schema';
import { db } from '../';
import { asc } from 'drizzle-orm';

export const getAllIndividualGoals = async () => {
    return await db.select().from(IndividualGoalsTable).orderBy(asc(IndividualGoalsTable.created_at));
};
