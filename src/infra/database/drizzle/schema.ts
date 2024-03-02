import {
	date,
	pgTable,
	text,
	timestamp,
	uniqueIndex,
	uuid,
	varchar,
} from 'drizzle-orm/pg-core';

export const authors = pgTable(
	'authors',
	{
		id: uuid('id').primaryKey(),
		name: varchar('name', { length: 265 }).notNull(),
		bio: text('bio').notNull(),
		dateOfBirth: date('date_of_birth', { mode: 'date' }).notNull(),
		dateOfDeath: date('date_of_death', { mode: 'date' }),
		createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
		updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
	},
	authors => {
		return {
			nameIndex: uniqueIndex('author_name_idx').on(authors.name),
		};
	},
);

export type Author = typeof authors;
