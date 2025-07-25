export const openPopover = () => {
    const popover = document.querySelector('.popover') as HTMLElement;
    if (!popover) {
        return;
    }
    popover.style.display = 'block';
}
