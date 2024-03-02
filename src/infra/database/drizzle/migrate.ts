import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const DATABASE_URL = process.env.DATABASE_URL ?? '';

const sql = postgres(DATABASE_URL, { max: 1 });

const db = drizzle(sql);

await migrate(db, { migrationsFolder: './drizzle' });

await sql.end();
