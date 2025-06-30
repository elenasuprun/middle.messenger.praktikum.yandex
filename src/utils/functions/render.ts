import { Block } from '../classes/block.ts';
import { Nullable } from '../types/nullable.ts';

export function render<TClass extends Block>(query: string, block: TClass): Nullable<Element> {
    const root = document.querySelector(query);
    if (!root) {
        return null;
    }

    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
}
