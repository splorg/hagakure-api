import { CreateAuthorUseCase } from '@/core/usecases/CreateAuthorUseCase';
import { GetAllAuthorsUseCase } from '@/core/usecases/GetAllAuthorsUseCase';
import { database } from '@/infra/database';

export const createAuthor = new CreateAuthorUseCase(database);
export const getAllAuthors = new GetAllAuthorsUseCase(database);
