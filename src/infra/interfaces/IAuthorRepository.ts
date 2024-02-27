import { Author } from '@/core/entities/Author';

export interface IAuthorRepository {
	getAll(): Promise<Author[]>;
	find(id: string): Promise<Author | null>;
	save(author: Author): Promise<boolean>;
}
