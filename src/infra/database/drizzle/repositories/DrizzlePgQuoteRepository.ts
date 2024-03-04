import { NotFoundError } from '@/core/application/errors/NotFoundError';
import { Quote } from '@/core/domain/Quote';
import { IQuoteRepository } from '@/core/interfaces/IQuoteRepository';
import { eq } from 'drizzle-orm';
import { Database } from '../db';
import { authors, quotes } from '../schema';

export class DrizzlePgQuoteRepository implements IQuoteRepository {
	constructor(private readonly db: Database) {}

	async findByAuthor(authorId: string): Promise<Quote[]> {
		const author = await this.db
			.select({ id: authors.id })
			.from(authors)
			.where(eq(authors.id, authorId))
			.limit(1);

		if (!author.length) {
			throw new NotFoundError('Author not found!');
		}

		const foundAuthor = author[0];

		const result = await this.db
			.select()
			.from(quotes)
			.where(eq(quotes.authorId, foundAuthor.id));

		return result;
	}
}
