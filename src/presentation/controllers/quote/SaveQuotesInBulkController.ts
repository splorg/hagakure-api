import {
	SaveInBulkDTO,
	SaveQuotesInBulkUseCase,
} from '@/core/application/usecases/quote/SaveQuotesInBulkUseCase';
import { HttpRequest } from '@/presentation/interfaces/HttpRequest';
import { HttpResponse } from '@/presentation/interfaces/HttpResponse';
import { IController } from '@/presentation/interfaces/IController';

export class SaveQuotesInBulkController
	implements IController<SaveInBulkDTO, { message: string }>
{
	constructor(private readonly useCase: SaveQuotesInBulkUseCase) {}

	async handle(
		req: HttpRequest<SaveInBulkDTO>,
	): Promise<HttpResponse<{ message: string }>> {
		await this.useCase.execute(req.body);

		return {
			statusCode: 200,
			body: { message: 'Quotes saved!' },
		};
	}
}
