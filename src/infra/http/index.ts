import {
	BadRequestError,
	InternalServerError,
	NotFoundError,
} from '@/core/application/errors';
import { Elysia } from 'elysia';
import { AuthorRoutes } from './routes/AuthorRoutes';
import { QuoteRoutes } from './routes/QuoteRoutes';

export const app = new Elysia()
	.error({
		NotFoundError,
		BadRequestError,
		InternalServerError,
	})
	.onError(({ error, set }) => {
		if (
			error instanceof NotFoundError ||
			error instanceof BadRequestError ||
			error instanceof InternalServerError
		) {
			set.status = error.status;
		}

		return { error: error.message };
	})
	.get('/', () => 'Hello Elysia')
	.use(AuthorRoutes)
	.use(QuoteRoutes);
