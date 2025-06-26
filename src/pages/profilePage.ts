import { Block } from '../general/block.ts';
import { Avatar } from '../components/avatar.ts';
import { Link } from '../components/link.ts';
import profileList from '../constants/profileList.ts';

export class ProfilePage extends Block {
    constructor(props: { username?: string }) {
        super({
            profileList,
            Avatar: new Avatar({ username: props.username }),
            LinkChangeProfile: new Link({
                text: 'Изменить данные',
            }),
            LinkChangePassword: new Link({
                text: 'Изменить пароль',
            }),
            LinkSignOut: new Link({
                text: 'Выйти'
            })
        });
    }

    override render(): string {
        return this.compile(
            `<div class="profile__wrapper">
                <aside class="profile__navigate">
                    <div class="profile__navigate--icon wrapper__center"></div>
                </aside>
                <main>
                    <div class="profile__info--container">
                        {{{ Avatar }}}
                        <div class="profile__list profile__list--info">
                            {{#if profileList.length}}
                                {{#each profileList as |field|}}
                                    <div class="profile__list--item">
                                        <span>{{field.label}}</span>
                                        <span class="profile__list--value">{{field.value}}</span>
                                    </div>
                                {{/each}}
                            {{/if}}
                        </div>
                        <nav class="profile__list">
                            <ul>
                                <li class="profile__list--item">{{{ LinkChangeProfile }}}</li>
                                <li class="profile__list--item">{{{ LinkChangePassword }}}</li>
                                <li class="profile__list--item out">{{{ LinkSignOut }}}</li>
                            </ul>
                        </nav>
                    </div>
                </main>
            </div>
            `
        );
    }
}
