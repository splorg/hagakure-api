import { Quote } from '@/core/domain/Quote';

export interface IQuoteRepository {
	findByAuthor(authorId: string): Promise<Quote[]>;
}
