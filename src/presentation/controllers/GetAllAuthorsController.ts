import { GetAllAuthorsUseCase } from '@/core/application/GetAllAuthorsUseCase';
import { Author } from '@/core/domain/Author';
import { HttpRequest } from '@/presentation/interfaces/HttpRequest';
import { HttpResponse } from '@/presentation/interfaces/HttpResponse';
import { IController } from '@/presentation/interfaces/IController';

export class GetAllAuthorsController implements IController<void, Author[]> {
	constructor(private readonly useCase: GetAllAuthorsUseCase) {}

	async handle(req: HttpRequest<void>): Promise<HttpResponse<Author[]>> {
		const authors = await this.useCase.execute();

		return {
			statusCode: 200,
			body: authors,
		};
	}
}
