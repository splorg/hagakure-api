import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const DATABASE_URL = process.env.DATABASE_URL ?? '';

export const queryClient = postgres(DATABASE_URL);

export const db = drizzle(queryClient, { schema, logger: true });

export type Database = typeof db;
