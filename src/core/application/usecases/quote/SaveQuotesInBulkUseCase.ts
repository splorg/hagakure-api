import { IQuoteRepository } from '@/core/interfaces/IQuoteRepository';
import { IUseCase } from '@/core/interfaces/IUseCase';
import { InternalServerError } from '../../errors';

export type SaveInBulkDTO = {
	quote: string;
	author: string;
}[];

export class SaveQuotesInBulkUseCase
	implements IUseCase<SaveInBulkDTO, boolean>
{
	constructor(private readonly repository: IQuoteRepository) {}

	async execute(input: SaveInBulkDTO): Promise<boolean> {
		const result = await this.repository.saveInBulk(input);

		if (!result) {
			throw new InternalServerError('Could not save quotes.');
		}

		return result;
	}
}
