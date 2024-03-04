import { randomUUID } from 'crypto';

export class Quote {
	constructor(
		readonly id: string,
		readonly text: string,
		readonly authorId: string,
	) {}
}
