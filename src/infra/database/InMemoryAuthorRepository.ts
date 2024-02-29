import { Author } from '@/core/entities/Author';
import { IAuthorRepository } from '@/core/interfaces/IAuthorRepository';

export class InMemoryAuthorRepository implements IAuthorRepository {
	private readonly authors: Author[] = [];

	async getAll(): Promise<Author[]> {
		return this.authors;
	}

	async find(id: string): Promise<Author | null> {
		return this.authors.find(a => a.id === id) ?? null;
	}

	async save(author: Author): Promise<boolean> {
		this.authors.push(author);
		return true;
	}
}
