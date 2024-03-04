import { GetQuotesByAuthorUseCase } from '@/core/application/quote/GetQuotesByAuthorUseCase';
import { Quote } from '@/core/domain/Quote';
import { HttpRequest } from '@/presentation/interfaces/HttpRequest';
import { HttpResponse } from '@/presentation/interfaces/HttpResponse';
import { IController } from '@/presentation/interfaces/IController';

interface GetByAuthorParams {
	id: string;
}

export class GetQuotesByAuthorController implements IController<void, Quote[]> {
	constructor(private readonly useCase: GetQuotesByAuthorUseCase) {}

	async handle(req: HttpRequest<void>): Promise<HttpResponse<Quote[]>> {
		if (!req.params.id) {
			throw new Error('ID must be provided!');
		}

		if (typeof req.params.id !== 'string') {
			throw new Error('ID must be a string!');
		}

		const authorId = req.params.id;

		const quotes = await this.useCase.execute(authorId);

		return {
			statusCode: 200,
			body: quotes,
		};
	}
}
