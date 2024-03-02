import { randomUUID } from 'crypto';

export class Author {
	constructor(
		readonly name: string,
		readonly bio: string,
		readonly dateOfBirth: Date,
		readonly dateOfDeath: Date | null,
		readonly id: string = randomUUID(),
	) {}
}
