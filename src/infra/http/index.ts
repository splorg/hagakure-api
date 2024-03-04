import { Elysia } from 'elysia';
import { AuthorRoutes } from './routes/AuthorRoutes';
import { QuoteRoutes } from './routes/QuoteRoutes';

export const app = new Elysia()
	.get('/', () => 'Hello Elysia')
	.use(AuthorRoutes)
	.use(QuoteRoutes);
