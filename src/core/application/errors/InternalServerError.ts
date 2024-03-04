import { HttpError } from './HttpError';

export class InternalServerError extends HttpError {
	constructor(message: string) {
		super({ message, status: 500 });
	}
}
