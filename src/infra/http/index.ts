import { Elysia } from 'elysia';
import { AuthorRoutes } from './routes/AuthorRoutes';

export const app = new Elysia()
	.get('/', () => 'Hello Elysia')
	.use(AuthorRoutes);
