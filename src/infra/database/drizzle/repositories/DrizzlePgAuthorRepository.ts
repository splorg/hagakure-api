import { Author } from '@/core/domain/Author';
import { IAuthorRepository } from '@/core/interfaces/IAuthorRepository';
import { eq } from 'drizzle-orm';
import { Database } from '../db';
import { authors } from '../schema';

export class DrizzlePgAuthorRepository implements IAuthorRepository {
	constructor(private readonly db: Database) {}

	async getAll(): Promise<Author[]> {
		const result = await this.db.select().from(authors);

		return result.map(
			a => new Author(a.name, a.bio, a.dateOfBirth, a.dateOfDeath, a.id),
		);
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

		return new Author(
			foundAuthor.name,
			foundAuthor.bio,
			foundAuthor.dateOfBirth,
			foundAuthor.dateOfDeath,
			foundAuthor.id,
		);
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
