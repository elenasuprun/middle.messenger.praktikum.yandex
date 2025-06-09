export default `
    <div class="profile__avatar--container">
        <div class="profile__avatar">
            <div class="profile__avatar--overlay">
                <span class="profile__avatar--overlay__text">Поменять<br> аватар</span>
            </div>
            <div class="profile__avatar--icon wrapper__center"></div>
        </div>
        {{#if username}}
            <p class="profile__avatar--username">{{username}}</p>
        {{/if}}
    </div>
`;
