import { BaseApi } from '../utils/classes/base-api.ts';
import { HTTPTransport } from '../utils/classes/http.ts';

export class ChatsApi extends BaseApi {
    private _http = new HTTPTransport('/chats');

    create(data: object): Promise<XMLHttpRequest> {
        return this._http.post('', { data });
    }

    request(data?: object): Promise<XMLHttpRequest> {
        return this._http.get('', { data });
    }

    delete(data: object): Promise<XMLHttpRequest> {
        return this._http.delete('', { data });
    }
}
