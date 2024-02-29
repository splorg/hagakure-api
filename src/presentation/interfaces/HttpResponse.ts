export interface HttpResponse<DTO> {
	statusCode: number;
	body: DTO;
}
