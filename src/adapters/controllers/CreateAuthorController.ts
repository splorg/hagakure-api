import { CreateAuthorUseCase } from '@/core/usecases/CreateAuthorUseCase';
import { Elysia, t } from 'elysia';

export function CreateAuthorController(useCase: CreateAuthorUseCase) {
	return new Elysia().post(
		'/authors',
		async ctx => {
			const author = await useCase.execute(ctx.body);
			ctx.set.status = 201;
			return author;
		},
		{
			body: t.Object({
				name: t.String(),
				bio: t.String(),
			}),
		},
	);
}
