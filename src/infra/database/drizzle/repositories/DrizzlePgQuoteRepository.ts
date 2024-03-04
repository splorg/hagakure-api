import { Quote } from '@/core/domain/Quote';
import { IQuoteRepository } from '@/core/interfaces/IQuoteRepository';
import { eq } from 'drizzle-orm';
import { Database } from '../db';
import { quotes } from '../schema';

export class DrizzlePgQuoteRepository implements IQuoteRepository {
	constructor(private readonly db: Database) {}

	async findByAuthor(authorId: string): Promise<Quote[]> {
		const result = await this.db
			.select()
			.from(quotes)
			.where(eq(quotes.authorId, authorId));

		return result;
	}
}
