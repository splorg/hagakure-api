import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';

export interface IController<TReq, TRes> {
	handle(req: HttpRequest<TReq>): Promise<HttpResponse<TRes>>;
}
