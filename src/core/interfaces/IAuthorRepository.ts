import { Author } from '@/core/domain/Author';

export interface IAuthorRepository {
	getAll(): Promise<Author[]>;
	find(id: string): Promise<Author | null>;
	save(author: Author): Promise<boolean>;
}
