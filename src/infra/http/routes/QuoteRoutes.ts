import { GetQuotesByAuthorController } from '@/presentation/controllers/quote/GetQuotesByAuthorController';
import { Elysia, t } from 'elysia';
import { getQuotesByAuthor } from '../provider';

export const QuoteRoutes = new Elysia({ prefix: '/quotes' }).get(
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
