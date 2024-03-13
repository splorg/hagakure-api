import { Quote } from '@/core/domain/Quote';

export interface IQuoteRepository {
	findByAuthor(authorId: string): Promise<Quote[]>;
	saveInBulk(bulkQuotes: { quote: string; author: string }[]): Promise<boolean>;
}
