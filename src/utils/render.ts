import { Block } from '../general/block.ts';
import { Nullable } from '../types/nullable.ts';

export function render<TClass extends Block>(query: string, block: TClass): Nullable<Element> {
    const root = document.querySelector(query);
    if (!root) {
        return null;
    }
    // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
}
