import { Block } from '../general/block.ts';

export function render<TClass extends Block>(query: string, block: TClass): Element | null {
    const root = document.querySelector(query);
    if (!root) {
        return null;
    }
    // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
}
