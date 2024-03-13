import { randomUUID } from 'crypto';
import { Quote } from './Quote';

export class Author {
	quotes?: Quote[];

	constructor(
		readonly name: string,
		readonly bio: string,
		readonly dateOfBirth: Date,
		readonly dateOfDeath: Date | null,
		readonly id: string = randomUUID(),
	) {}
}
