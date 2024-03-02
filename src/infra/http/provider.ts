import { CreateAuthorUseCase } from '@/core/application/CreateAuthorUseCase';
import { GetAllAuthorsUseCase } from '@/core/application/GetAllAuthorsUseCase';
import { database } from '@/infra/database';

export const createAuthor = new CreateAuthorUseCase(database);
export const getAllAuthors = new GetAllAuthorsUseCase(database);
