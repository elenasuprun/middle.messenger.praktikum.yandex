export const StoreEvents = {
    UPDATED: 'updated'
} as const;
type StoreEvents = typeof StoreEvents[keyof typeof StoreEvents];
