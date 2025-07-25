import { Block } from '../../utils/classes/block.ts';
import { connect } from '../../utils/functions/connect.ts';
import { User } from '../../utils/models/user.model.ts';

class Avatar extends Block {
    constructor(props = {}) {
        super(props);
    }

    override render(): string {
        return `<div class="avatar--container">
                    <div class="avatar">
                        {{#if avatar}}
                            <img class="avatar__img" src="{{avatar}}" alt="avatar">
                        {{/if}}
                        <div class="avatar--overlay">
                            <span class="avatar--overlay__text">Поменять<br> аватар</span>
                        </div>
                        <div class="avatar--icon wrapper__center"></div>
                    </div>
                </div>`;
    }
}

export default connect(Avatar, state => {
    const avatarUrl = (state.user as User)?.avatar;
    return {
        avatar: avatarUrl ? 'https://ya-praktikum.tech/api/v2/resources' + avatarUrl : '',
    };
});
