import { DateType } from '@/infra/http/plugins/DateType';
import { createAuthor, getAllAuthors } from '@/infra/http/provider';
import { CreateAuthorController } from '@/presentation/controllers/author/CreateAuthorController';
import { GetAllAuthorsController } from '@/presentation/controllers/author/GetAllAuthorsController';
import { Elysia, t } from 'elysia';

export const AuthorRoutes = new Elysia({ prefix: '/authors' })
	.get('/', async ctx => {
		const getAllController = new GetAllAuthorsController(getAllAuthors);

		const response = await getAllController.handle({
			body: undefined,
			params: ctx.params,
			query: ctx.query,
		});

		ctx.set.status = response.statusCode;

		return response.body;
	})
	.post(
		'/',
		async ctx => {
			const createAuthorController = new CreateAuthorController(createAuthor);

			const response = await createAuthorController.handle({
				body: ctx.body,
				params: ctx.params,
				query: ctx.query,
			});

			ctx.set.status = response.statusCode;

			return response.body;
		},
		{
			body: t.Object({
				name: t.String(),
				bio: t.String(),
				dateOfBirth: DateType,
				dateOfDeath: t.Optional(DateType),
			}),
		},
	);
