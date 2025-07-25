import { Block } from '../../utils/classes/block.ts';
import { Nullable } from '../../utils/types/nullable.ts';
import { Button } from '../Button/button.ts';
import { ChangeUserAvatarApi } from '../../pages/changeInfo/api/changeUserAvatar.api.ts';

export class Popover extends Block {
    constructor() {
        super({
            ButtonSubmit: new Button({
                className: 'form__submit popover__submit',
                text: 'Поменять',
                events: {
                    click: () => {
                        const fileInput = this.element.querySelector('#avatar') as HTMLInputElement;
                        const file = fileInput.files?.[0];
                        if (fileInput && file) {
                            const formData = new FormData();
                            formData.append('avatar', file);
                            new ChangeUserAvatarApi().update(formData);
                        }
                    }
                }
            })
        });
    }

    override addEvents(): void {
        super.addEvents();

        const overlay = this._getOverlay();
        if (overlay) {
            overlay.addEventListener('click', this._onOverlayClick.bind(this));
        }

        const file = this.element.querySelector('#avatar');
        if (file) {
            file.addEventListener('change', this._onFileChange.bind(this));
        }
    }

    override removeEvents(): void {
        super.removeEvents();

        const overlay = this._getOverlay();
        if (overlay) {
            overlay.removeEventListener('click', this._onOverlayClick.bind(this));
        }

        const file = this.element.querySelector('#avatar');
        if (file) {
            file.removeEventListener('change', this._onFileChange.bind(this));
        }
    }

    override render(): string {
        return `<div class="popover">
                    <div class="popover__overlay"></div>
                    <div class="popover__content">
                        <p class="popover__title">Загрузите файл</p>
                        <p class="popover__file--name"></p>
                        <form class="popover__form">
                            <input class="popover__file" type="file" id="avatar">
                            <input class="popover__file--button"
                                    type="button" value="Выбрать файл на компьютере"
                                    onclick="document.getElementById('avatar').click()">
                        </form>
                        {{{ ButtonSubmit }}}
                        <p class="message">Нужно выбрать файл</p>
                    </div>
                </div>`;
    }

    private _getOverlay(): Nullable<Element> {
        return this.element.querySelector('.popover__overlay');
    }

    private _togglePopoverContent(state: boolean, fileText = ''): void {
        const fileName = this.element.querySelector('.popover__file--name');
        if (fileName) {
            fileName.textContent = fileText;
        }

        const title = this.element.querySelector('.popover__title');
        if (title) {
            title.textContent = state ? 'Файл загружен' : 'Загрузите файл';
        }

        const form = this.element.querySelector('.popover__form') as HTMLFormElement;
        form.style.display = state ? 'none' : 'block';
    }

    private _onOverlayClick(): void {
        this.hide();
        const file = this.element.querySelector('#avatar') as HTMLInputElement;
        if (file) {
            file.value = '';
            this._togglePopoverContent(false);
        }
    }

    private _onFileChange(e: Event): void {
        const target = e.target;
        if (!target || !(target instanceof HTMLInputElement)) {
            return;
        }

        const file = target.files?.[0];
        this._togglePopoverContent(true, file?.name);
    }
}
