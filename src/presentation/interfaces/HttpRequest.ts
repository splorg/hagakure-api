export interface HttpRequest<DTO = void> {
	body: DTO;
	query: Record<string, string | undefined>;
	params: Record<string, string | number>;
	headers?: {
		[x: string]: string | undefined;
	};
}
