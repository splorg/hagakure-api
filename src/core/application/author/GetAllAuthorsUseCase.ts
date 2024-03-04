import { Author } from '@/core/domain/Author';
import { IAuthorRepository } from '@/core/interfaces/IAuthorRepository';
import { IUseCase } from '@/core/interfaces/IUseCase';

export class GetAllAuthorsUseCase implements IUseCase<void, Author[]> {
	constructor(private readonly repository: IAuthorRepository) {}

	async execute(): Promise<Author[]> {
		const result = await this.repository.getAll();

		return result.map(
			a => new Author(a.name, a.bio, a.dateOfBirth, a.dateOfDeath, a.id),
		);
	}
}
