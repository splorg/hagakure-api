import { Author } from '@/core/domain/Author';
import { IAuthorRepository } from '@/core/interfaces/IAuthorRepository';
import { eq } from 'drizzle-orm';
import { Database } from '../db';
import { authors } from '../schema';

export class DrizzlePgAuthorRepository implements IAuthorRepository {
	constructor(private readonly db: Database) {}

	async getAll(): Promise<Author[]> {
		return this.db.select().from(authors);
	}

	async find(id: string): Promise<Author | null> {
		const result = await this.db
			.select()
			.from(authors)
			.where(eq(authors.id, id))
			.limit(1);

		if (!result.length) {
			return null;
		}

		const foundAuthor = result[0];

		return foundAuthor;
	}

	async save(author: Author): Promise<boolean> {
		const newAuthor = await this.db
			.insert(authors)
			.values({
				...author,
			})
			.onConflictDoNothing({ target: authors.id })
			.returning();

		return !!newAuthor.length;
	}
}
