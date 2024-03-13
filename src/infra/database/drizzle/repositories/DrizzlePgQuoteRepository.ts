import { NotFoundError } from '@/core/application/errors/NotFoundError';
import { Quote } from '@/core/domain/Quote';
import { IQuoteRepository } from '@/core/interfaces/IQuoteRepository';
import { eq } from 'drizzle-orm';
import { Database } from '../db';
import { authors, quotes } from '../schema';

export class DrizzlePgQuoteRepository implements IQuoteRepository {
	constructor(private readonly db: Database) {}

	async findByAuthor(authorId: string): Promise<Quote[]> {
		const result = await this.db
			.select()
			.from(quotes)
			.where(eq(quotes.authorId, authorId));

		if (!result.length) {
			throw new NotFoundError('Author not found!');
		}

		return result;
	}

	async saveInBulk(
		bulkQuotes: { quote: string; author: string }[],
	): Promise<boolean> {
		const authorName = bulkQuotes[0].author;

		const authorResult = await this.db
			.select({ id: authors.id })
			.from(authors)
			.where(eq(authors.name, authorName))
			.limit(1);

		if (!authorResult.length) {
			throw new NotFoundError('Author not found!');
		}

		const { id: authorId } = authorResult[0];

		const quotesToInsert = bulkQuotes.map(
			quote => new Quote(quote.quote, authorId),
		);

		const results = await this.db
			.insert(quotes)
			.values(quotesToInsert)
			.onConflictDoNothing()
			.returning();

		return !!results.length;
	}
}
