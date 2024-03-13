import { CreateAuthorUseCase } from '@/core/application/usecases/author/CreateAuthorUseCase';
import { GetAllAuthorsUseCase } from '@/core/application/usecases/author/GetAllAuthorsUseCase';
import { GetAuthorByIdUseCase } from '@/core/application/usecases/author/GetAuthorByIdUseCase';
import { GetQuotesByAuthorUseCase } from '@/core/application/usecases/quote/GetQuotesByAuthorUseCase';
import { SaveQuotesInBulkUseCase } from '@/core/application/usecases/quote/SaveQuotesInBulkUseCase';
import { authorDb, quoteDb } from '@/infra/database';

export const createAuthor = new CreateAuthorUseCase(authorDb);
export const getAllAuthors = new GetAllAuthorsUseCase(authorDb);
export const getAuthorById = new GetAuthorByIdUseCase(authorDb, quoteDb);

export const getQuotesByAuthor = new GetQuotesByAuthorUseCase(quoteDb);
export const saveQuotesInBulk = new SaveQuotesInBulkUseCase(quoteDb);
