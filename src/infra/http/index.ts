import { CreateAuthorController } from '@/adapters/controllers/CreateAuthorController';
import { GetAllAuthorsController } from '@/adapters/controllers/GetAllAuthorsController';
import { CreateAuthorUseCase } from '@/core/usecases/CreateAuthorUseCase';
import { GetAllAuthorsUseCase } from '@/core/usecases/GetAllAuthorsUseCase';
import { InMemoryAuthorRepository } from '@/infra/database/InMemoryAuthorRepository';
import { Elysia } from 'elysia';

// these should come from a factory instead
const repo = new InMemoryAuthorRepository();
const uc = new CreateAuthorUseCase(repo);
const getUc = new GetAllAuthorsUseCase(repo);

const app = new Elysia()
	.get('/', () => 'Hello Elysia')
	.use(CreateAuthorController(uc))
	.use(GetAllAuthorsController(getUc));

app.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
