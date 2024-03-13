import { NotFoundError } from '@/core/application/errors';
import { Author } from '@/core/domain/Author';
import { IAuthorRepository } from '@/core/interfaces/IAuthorRepository';
import { IQuoteRepository } from '@/core/interfaces/IQuoteRepository';
import { IUseCase } from '@/core/interfaces/IUseCase';

export class GetAuthorByIdUseCase implements IUseCase<string, Author> {
	constructor(
		private readonly authorRepo: IAuthorRepository,
		private readonly quotesRepo: IQuoteRepository,
	) {}

	async execute(id: string): Promise<Author> {
		const author = await this.authorRepo.find(id);

		if (!author) {
			throw new NotFoundError('Author not found!');
		}

		author.quotes = await this.quotesRepo.findByAuthor(author.id);

		return author;
	}
}
