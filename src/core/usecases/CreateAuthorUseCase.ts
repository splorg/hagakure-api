import { Author } from '@/core/entities/Author';
import { IAuthorRepository } from '@/core/interfaces/IAuthorRepository';
import { IUseCase } from '@/core/interfaces/IUseCase';

export type CreateAuthorDTO = {
	name: string;
	bio: string;
	dateOfBirth?: Date;
	dateOfDeath?: Date;
};

export type CreateAuthorResult = Author;

export class CreateAuthorUseCase
	implements IUseCase<CreateAuthorDTO, CreateAuthorResult>
{
	constructor(private readonly repository: IAuthorRepository) {}

	async execute(input: CreateAuthorDTO): Promise<CreateAuthorResult> {
		const author = new Author(
			input.name,
			input.bio,
			input.dateOfBirth ?? new Date(),
			input.dateOfDeath || null,
		);

		const result = await this.repository.save(author);

		if (!result) {
			throw new Error('Could not save author.');
		}

		return author;
	}
}
