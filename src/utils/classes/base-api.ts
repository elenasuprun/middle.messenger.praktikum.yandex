export abstract class BaseApi {
    create?(...args: unknown[]): unknown;

    request?(...args: unknown[]): unknown;

    update?(...args: unknown[]): unknown;

    delete?(...args: unknown[]): unknown;
}
