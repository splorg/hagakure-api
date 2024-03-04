import { Quote } from '@/core/domain/Quote';
import { IQuoteRepository } from '@/core/interfaces/IQuoteRepository';
import { IUseCase } from '@/core/interfaces/IUseCase';

export class GetQuotesByAuthorUseCase implements IUseCase<string, Quote[]> {
	constructor(private readonly repository: IQuoteRepository) {}

	async execute(authorId: string): Promise<Quote[]> {
		const result = await this.repository.findByAuthor(authorId);

		return result.map(q => new Quote(q.id, q.text, q.authorId));
	}
}
