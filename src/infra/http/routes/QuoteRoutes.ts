import { GetQuotesByAuthorController } from '@/presentation/controllers/quote/GetQuotesByAuthorController';
import { SaveQuotesInBulkController } from '@/presentation/controllers/quote/SaveQuotesInBulkController';
import { Elysia, t } from 'elysia';
import { getQuotesByAuthor, saveQuotesInBulk } from '../provider';

export const QuoteRoutes = new Elysia({ prefix: '/quotes' })
	.post(
		'/bulk',
		async ctx => {
			const saveInBulkController = new SaveQuotesInBulkController(
				saveQuotesInBulk,
			);

			const response = await saveInBulkController.handle({
				body: ctx.body,
				params: ctx.params,
				query: ctx.query,
			});

			ctx.set.status = response.statusCode;

			return response.body;
		},
		{
			body: t.Array(
				t.Object({
					quote: t.String(),
					author: t.String(),
				}),
			),
		},
	)
	.get(
		'/author/:id',
		async ctx => {
			const getByAuthorController = new GetQuotesByAuthorController(
				getQuotesByAuthor,
			);

			const response = await getByAuthorController.handle({
				body: undefined,
				params: ctx.params,
				query: ctx.query,
			});

			ctx.set.status = response.statusCode;

			return response.body;
		},
		{
			params: t.Object({
				id: t.String({
					format: 'uuid',
					default: '00000000-00000000-00000000-00000000',
				}),
			}),
		},
	);
