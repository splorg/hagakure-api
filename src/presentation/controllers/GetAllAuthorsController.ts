import { Author } from '@/core/entities/Author';
import { GetAllAuthorsUseCase } from '@/core/usecases/GetAllAuthorsUseCase';
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
