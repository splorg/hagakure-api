import { randomUUID } from 'crypto';

export class Quote {
	constructor(
		readonly text: string,
		readonly authorId: string,
		readonly id: string = randomUUID(),
	) {}
}
