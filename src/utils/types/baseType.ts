export type TBase = {
    _id?: string;
    events?: Record<string, (e: Event) => void>;
}
