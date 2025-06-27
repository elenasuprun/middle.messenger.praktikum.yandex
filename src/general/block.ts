import { EventBus } from './eventBus.ts';
import { v4 as makeUUID } from 'uuid';
import * as Handlebars from 'handlebars';
import { Nullable } from '../types/nullable.ts';

type Meta = {
    tagName: string;
    props: Record<string | symbol, unknown>;
}

export class Block<TProps extends Record<string | symbol, unknown> = {}> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    public eventBus: () => EventBus;

    protected readonly props: ProxyHandler<TProps>;
    protected readonly children: Record<string | symbol, unknown>;
    protected readonly lists: Record<string | symbol, unknown[]>;

    protected _element: HTMLElement;
    protected _id: Nullable<string> = null;

    get element(): HTMLElement {
        return this._element;
    }

    private readonly _meta: Meta;

    constructor(propsAndChildrenAndLists: TProps, tagName = 'div') {
        const eventBus = new EventBus();
        this.eventBus = () => eventBus;

        this._id = makeUUID();

        const { props, children, lists } = this._getPropsAndChildrenAndLists(propsAndChildrenAndLists);
        this._meta = {
            tagName,
            props: propsAndChildrenAndLists
        };

        this.children = children;
        this.lists = lists;
        this.props = this._makePropsProxy({ ...props as TProps, __id: this._id });
        this._registerEvents();
        this.eventBus().emit(Block.EVENTS.INIT);
    }

    init(): void {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    compile(template: string): DocumentFragment {
        const propsAndStubs: Record<string, unknown> = { ...this.props };

        Object.entries(this.children).forEach(([key, child]: [string, Block]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
        });

        Object.entries(this.lists).forEach(([key, list]: [string, unknown[]]) => {
            if (list.some(child => child instanceof Block)) {
                propsAndStubs[key] = list.map((child: Block) => `<div data-id="${child._id}"></div>`).join('\n');
            } else {
                propsAndStubs[key] = list;
            }
        });

        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(this.children).forEach((child: Block) => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

            if (!stub) {
                return '';
            }
            stub.replaceWith(child.getContent());
        });

        Object.values(this.lists).forEach((list: unknown[]) => {
            if (list.some(child => child instanceof Block)) {
                list.forEach((child: Block) => {
                    const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
                    if (!stub) {
                        return '';
                    }
                    stub.replaceWith(child.getContent());
                })
            }
        });

        return fragment.content;
    }

    getContent(): HTMLElement {
        return this.element;
    }

    setProps(newProps: Partial<TProps>): void {
        if (!newProps) {
            return;
        }
        Object.assign(this.props, newProps);
    }

    // переопределяются при наследовании
    render(): string {
        return '';
    }

    componentDidMount(): void {
    }

    componentDidUpdate(...args: unknown[]): void {
        console.log('componentDidUpdate', args);
    }

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _makePropsProxy(props: TProps): ProxyHandler<TProps> {
        const self = this;
        return new Proxy(props, {
            get<K extends keyof TProps>(target: TProps, prop: K): unknown {
                const value: unknown = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set<K extends keyof TProps>(target: TProps, prop: K, value: TProps[K]): boolean {
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target });
                return true;
            },
            deleteProperty(): boolean {
                throw new Error('Denied');
            }
        });
    }

    private _registerEvents(): void {
        this.eventBus().on(Block.EVENTS.INIT, this.init.bind(this));
        this.eventBus().on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this.eventBus().on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this.eventBus().on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources(): void {
        this._element = document.createElement(this._meta.tagName);
    }

    private _componentDidMount(): void {
        this.componentDidMount();

        Object
            .values(this.children)
            .forEach((child: Block) => child.dispatchComponentDidMount());
    }

    private _componentDidUpdate(oldProps: TProps, newProps: TProps): void {
        this.componentDidUpdate(oldProps, newProps);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _render(): void {
        const block = this.compile(this.render()) as DocumentFragment;

        this.removeEvents();

        this._element.innerHTML = '';
        this._element = block.firstElementChild as HTMLElement;

        this.addEvents();
    }

    protected addEvents(): void {
        const { events } = this._meta.props;

        if (!events) {
            return;
        }

        for (const [type, listener] of Object.entries(events)) {
            this.element.addEventListener(type, listener);
        }
    }

    protected removeEvents(): void {
        const { events } = this._meta.props;

        if (!events) {
            return;
        }

        for (const [type, listener] of Object.entries(events)) {
            this.element.removeEventListener(type, listener);
        }
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        const element = document.createElement(tagName);
        if (this._id) {
            element.setAttribute('data-id', this._id);
        }
        return element;
    }

    private _getPropsAndChildrenAndLists(propsAndChildren: Record<string | symbol, unknown>): {
        props: Record<string | symbol, unknown>,
        children: Record<string | symbol, unknown>,
        lists: Record<string | symbol, unknown[]>
    } {
        const props: Record<string | symbol, unknown> = {};
        const children: Record<string | symbol, unknown> = {};
        const lists: Record<string | symbol, unknown[]> = {};

        Object.entries(propsAndChildren)
            .forEach(([key, value]) => {
                if (value instanceof Block) {
                    children[key] = value;
                } else if (Array.isArray(value)) {
                    lists[key] = value;
                } else {
                    props[key] = value;
                }
            });

        return { props, children, lists };
    }
}
