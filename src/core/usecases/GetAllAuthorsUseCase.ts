import { Author } from '@/core/entities/Author';
import { IAuthorRepository } from '@/infra/interfaces/IAuthorRepository';
import { IUseCase } from './interfaces/IUseCase';

export class GetAllAuthorsUseCase implements IUseCase<void, Author[]> {
	constructor(private readonly repository: IAuthorRepository) {}

	execute(): Promise<Author[]> {
		return this.repository.getAll();
	}
}
