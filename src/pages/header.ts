import { Block } from '../utils/classes/block.ts';
import { navigationList } from '../utils/constants/navigation.ts';
import { Link } from '../components/Link/link.ts';
import { TLink } from '../components/Link/types.ts';

export class HeaderPage extends Block {
    constructor() {
        super({
            NavigationLinkList: navigationList.map(nav => new NavigationLink(nav))
        });
    }

    override render(): string {
        return `<nav>
                    <ul class="nav__list">
                        {{{ NavigationLinkList }}}
                    </ul>
                </nav>`;
    }
}

class NavigationLink extends Block {
    constructor(props: Partial<TLink>) {
        super({
            NavigationLink: new Link(props)
        });
    }

    override render(): string {
        return `<li class="nav__list--item">
                    {{{ NavigationLink }}}
                </li>`;
    }
}
