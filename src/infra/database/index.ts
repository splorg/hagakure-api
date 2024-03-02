import { db } from './drizzle/db';
import { DrizzlePgAuthorRepository } from './drizzle/repositories/DrizzlePgAuthorRepository';

export const database = new DrizzlePgAuthorRepository(db);
