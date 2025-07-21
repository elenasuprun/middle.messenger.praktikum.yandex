import { Block } from '../../utils/classes/block.ts';
import { Link } from '../../components/Link/link.ts';
import { Input } from '../../components/Input/input.ts';
import { Chat } from '../../components/Chat/chat.ts';
import { Message } from '../../components/Message/message.ts';
import { ChatController } from './chat.controller.ts';
import { Routes } from '../../utils/enums/routes.ts';

export class ChatPage extends Block {
    private _controller = new ChatController();

    constructor() {
        super({
            LinkHelp: new Link({
                className: 'chat__header--link',
                text: 'Профиль',
                url: Routes.Profile,
            }),
            InputSearch: new Input({
                labelClassName: 'chat__header--search',
                type: 'text',
                placeholder: 'Поиск'
            }),
            Chat: new Chat({
                title: 'Киноклуб',
                date: '10:42',
                message: 'Круто!'
            }),
            InputMessage: new Input({
                labelClassName: 'chat__space__footer--message',
                placeholder: 'Сообщение',
                type: 'text',
                name: 'message'
            }),
            Message: new Message({
                className: 'chat__space__main--message',
                time: '11:56',
                text: ''
            }),
            Reply: new Message({
                className: 'chat__space__main--reply',
                time: '12:00',
                text: ''
            }),
            chatName: 'Вадим'
        });
        this._controller.getChats();
    }

    override render(): string {
        return `<div class="chat__wrapper">
                    <div class="chat__list">
                        <form class="chat__list--header">
                            {{{ LinkHelp }}}
                            {{{ InputSearch }}}
                        </form>
                        <div class="chat__list--main">
                            {{{ Chat }}}
                        </div>
                    </div>
                    <div class="chat__space">
                        <header class="chat__space__header">
                            <div class="chat__space__header--info">
                                <div class="chat__space__header--avatar"></div>
                                <p class="chat__space__header--label">{{ chatName }}</p>
                            </div>
                            <div class="chat__space__header--menu"></div>
                        </header>
                        <main class="chat__space__main">
                            <div class="chat__space__main--wrapper">
                                {{{ Message }}}
                                {{{ Reply }}}
                            </div>
                        </main>
                        <footer class="chat__space__footer">
                            <div class="chat__space__footer--clip"></div>
                            {{{ InputMessage }}}
                            <div class="chat__space__footer--submit"></div>
                        </footer>
                    </div>
                </div>`;
    }
}
