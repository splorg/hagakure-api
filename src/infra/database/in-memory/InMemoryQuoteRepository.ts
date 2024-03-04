import { Quote } from '@/core/domain/Quote';
import { IQuoteRepository } from '@/core/interfaces/IQuoteRepository';

export class InMemoryQuoteRepository implements IQuoteRepository {
	private readonly quotes: Quote[] = [];

	async findByAuthor(authorId: string): Promise<Quote[]> {
		return this.quotes.filter(q => q.authorId === authorId);
	}
}
