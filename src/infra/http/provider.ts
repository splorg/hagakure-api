import { CreateAuthorUseCase } from '@/core/application/author/CreateAuthorUseCase';
import { GetAllAuthorsUseCase } from '@/core/application/author/GetAllAuthorsUseCase';
import { GetQuotesByAuthorUseCase } from '@/core/application/quote/GetQuotesByAuthorUseCase';
import { authorDb, quoteDb } from '@/infra/database';

export const createAuthor = new CreateAuthorUseCase(authorDb);
export const getAllAuthors = new GetAllAuthorsUseCase(authorDb);

export const getQuotesByAuthor = new GetQuotesByAuthorUseCase(quoteDb);
