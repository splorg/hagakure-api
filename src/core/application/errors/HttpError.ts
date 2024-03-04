export class HttpError extends Error {
	readonly status: number;

	constructor(data: { message: string; status: number }) {
		super(data.message);
		this.status = data.status;
	}
}
