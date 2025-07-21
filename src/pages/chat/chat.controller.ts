import { ChatsApi } from '../../api/chats.api.ts';
import { default as Store } from '../../utils/classes/store.ts';

export class ChatController {
    private _chatsApi = new ChatsApi();

    getChats(): void {
        this._chatsApi
            .request()
            .then(
                data => Store.set('chats', JSON.parse(data.response))
            );
    }
}
