import { Block } from '../general/block.ts';
import { Link } from '../components/link.ts';
import { Input } from '../components/input.ts';
import { Chat } from '../components/chat.ts';

export class ChatPage extends Block {
    constructor() {
        super({
            LinkHelp: new Link({
                className: 'chat__header--link',
                text: 'Помощь'
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
            chatName: 'Вадим'
        });
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
                        <main></main>
                        <footer class="chat__space__footer">
                            <div class="chat__space__footer--clip"></div>
                            {{{ InputMessage }}}
                            <div class="chat__space__footer--submit"></div>
                        </footer>
                    </div>
                </div>`;
    }
}
