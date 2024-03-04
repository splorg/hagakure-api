import { Author } from '@/core/domain/Author';
import { IAuthorRepository } from '@/core/interfaces/IAuthorRepository';
import { IUseCase } from '@/core/interfaces/IUseCase';
import { InternalServerError } from '../../errors';

export type CreateAuthorDTO = {
	name: string;
	bio: string;
	dateOfBirth: string;
	dateOfDeath?: string;
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
			new Date(input.dateOfBirth),
			input.dateOfDeath ? new Date(input.dateOfDeath) : null,
		);

		const result = await this.repository.save(author);

		if (!result) {
			throw new InternalServerError('Could not save author.');
		}

		return author;
	}
}
