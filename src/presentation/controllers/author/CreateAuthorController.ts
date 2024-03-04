import {
	CreateAuthorDTO,
	CreateAuthorUseCase,
} from '@/core/application/author/CreateAuthorUseCase';
import { Author } from '@/core/domain/Author';
import { HttpRequest } from '@/presentation/interfaces/HttpRequest';
import { HttpResponse } from '@/presentation/interfaces/HttpResponse';
import { IController } from '@/presentation/interfaces/IController';

export class CreateAuthorController
	implements IController<CreateAuthorDTO, Author>
{
	constructor(private readonly useCase: CreateAuthorUseCase) {}

	async handle(
		req: HttpRequest<CreateAuthorDTO>,
	): Promise<HttpResponse<Author>> {
		const body = req.body;

		const author = await this.useCase.execute(body);

		return {
			statusCode: 201,
			body: new Author(
				author.name,
				author.bio,
				author.dateOfBirth,
				author.dateOfDeath,
				author.id,
			),
		};
	}
}
[];
