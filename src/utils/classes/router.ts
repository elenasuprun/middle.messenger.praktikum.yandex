import { Nullable } from '../types/nullable.ts';
import { Route } from './route.ts';
import { Block } from './block.ts';

export class Router {
    public routes: Route[] = [];
    public history: Nullable<History> = null;

    private readonly _rootQuery: Nullable<string> = null;
    private _currentRoute: Nullable<Route> = null;

    private static __instance: Router;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this._rootQuery = rootQuery;
        this.history = window.history;

        Router.__instance = this;
    }

    use<TBlock extends typeof Block>(pathname: string, block: TBlock) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);

        this._currentRoute = route;
        return this;
    }

    start(): void {
        window.onpopstate = (e) => {
            const target = e.currentTarget as Window;
            this._onRoute(target.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    go(pathname: string): void {
        if (!this.history) {
            throw new Error('No history');
        }
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back(): void {
        this._noHistoryHandler();
        this.history!.back();
    }

    forward(): void {
        this._noHistoryHandler();
        this.history!.forward();
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            throw new Error(`Route ${pathname} not found`);
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    private getRoute(pathname: string): Nullable<Route> {
        const route = this.routes.find(route => route.match(pathname));
        return route ?? null;
    }

    private _noHistoryHandler(): void {
        if (!this.history) {
            throw new Error('No history');
        }
    }
}
