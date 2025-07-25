import { Block } from '../../utils/classes/block.ts';
import Avatar from '../../components/Avatar/avatar.ts';
import { Link } from '../../components/Link/link.ts';
import { Routes } from '../../utils/enums/routes.ts';
import { ButtonBack } from '../../components/ButtonBack/buttonBack.ts';
import { Button } from '../../components/Button/button.ts';
import { ProfileController } from './profile.controller.ts';
import { connect } from '../../utils/functions/connect.ts';
import { mapUserFromState } from '../../utils/functions/mapUserFromState.ts';
import { Popover } from '../../components/Popover/popover.ts';
import { openPopover } from '../../utils/functions/popoverHandlers.ts';

class ProfilePage extends Block {
    private _profileController = new ProfileController();

    constructor() {
        super({
            Avatar: new Avatar({
                events: {
                    click: openPopover
                }
            }),
            LinkChangeProfile: new Link({
                text: 'Изменить данные',
                url: Routes.ChangeInfo
            }),
            LinkChangePassword: new Link({
                text: 'Изменить пароль',
                url: Routes.ChangePassword
            }),
            ButtonSignOut: new Button({
                className: 'profile__logout',
                text: 'Выйти',
                events: {
                    click: () => this._profileController.logout()
                }
            }),
            ButtonBack: new ButtonBack(),
            Popover: new Popover()
        });

        this._profileController.getUserInfo();
    }

    override render(): string {
        return `<div class="profile__wrapper">
                    {{{ ButtonBack }}}
                    <main>
                        <div class="profile__info--container">
                            {{{ Avatar }}}
                            <p class="avatar--username">{{user.first_name}}</p>
                            <div class="profile__list profile__list--info">
                                <div class="profile__list--item">
                                    <span>Почта</span>
                                    <span class="profile__list--value">{{user.email}}</span>
                                </div>
                                <div class="profile__list--item">
                                    <span>Логин</span>
                                    <span class="profile__list--value">{{user.login}}</span>
                                </div>
                                <div class="profile__list--item">
                                    <span>Имя</span>
                                    <span class="profile__list--value">{{user.first_name}}</span>
                                </div>
                                <div class="profile__list--item">
                                    <span>Фамилия</span>
                                    <span class="profile__list--value">{{user.second_name}}</span>
                                </div>
                                <div class="profile__list--item">
                                    <span>Имя в чате</span>
                                    <span class="profile__list--value">{{user.display_name}}</span>
                                </div>
                                <div class="profile__list--item">
                                    <span>Телефон</span>
                                    <span class="profile__list--value">{{user.phone}}</span>
                                </div>
                            </div>
                            <nav class="profile__list">
                                <ul>
                                    <li class="profile__list--item">{{{ LinkChangeProfile }}}</li>
                                    <li class="profile__list--item">{{{ LinkChangePassword }}}</li>
                                    <li class="profile__list--item">{{{ ButtonSignOut }}}</li>
                                </ul>
                            </nav>
                        </div>
                    </main>
                {{{ Popover }}}
                </div>`;
    }
}

export default connect(ProfilePage, mapUserFromState);
