import { db } from './drizzle/db';
import { DrizzlePgAuthorRepository } from './drizzle/repositories/DrizzlePgAuthorRepository';
import { DrizzlePgQuoteRepository } from './drizzle/repositories/DrizzlePgQuoteRepository';

export const authorDb = new DrizzlePgAuthorRepository(db);
export const quoteDb = new DrizzlePgQuoteRepository(db);
