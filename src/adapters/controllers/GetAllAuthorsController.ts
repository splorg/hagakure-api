import { GetAllAuthorsUseCase } from '@/application/GetAllAuthorsUseCase';
import { Elysia } from 'elysia';

export function GetAllAuthorsController(useCase: GetAllAuthorsUseCase) {
	return new Elysia().get('/authors', async () => {
		const authors = await useCase.execute();

		return authors;
	});
}
