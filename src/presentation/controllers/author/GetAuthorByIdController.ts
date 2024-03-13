import { BadRequestError } from '@/core/application/errors';
import { GetAuthorByIdUseCase } from '@/core/application/usecases/author/GetAuthorByIdUseCase';
import { Author } from '@/core/domain/Author';
import { HttpRequest } from '@/presentation/interfaces/HttpRequest';
import { HttpResponse } from '@/presentation/interfaces/HttpResponse';
import { IController } from '@/presentation/interfaces/IController';

export class GetAuthorByIdController implements IController<void, Author> {
	constructor(private readonly useCase: GetAuthorByIdUseCase) {}

	async handle(req: HttpRequest<void>): Promise<HttpResponse<Author>> {
		if (!req.params.id) {
			throw new BadRequestError('ID must be provided!');
		}

		if (typeof req.params.id !== 'string') {
			throw new BadRequestError('ID must be a string!');
		}

		const authorId = req.params.id;

		const author = await this.useCase.execute(authorId);

		return {
			statusCode: 200,
			body: author,
		};
	}
}
