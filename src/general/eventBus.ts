export class EventBus {
    private listeners: Record<string, Function[]> = {};

    on(eventName: string, callback: Function): void {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    }

    off(eventName: string, callback: Function): void {
        if (!this.listeners?.[eventName]) {
            throw new Error(`Event ${eventName} is not defined`);
        }
        this.listeners[eventName] = this.listeners[eventName]
            .filter(cb => cb !== callback);
    }

    emit(eventName: string, ...args: any[]): void {
        if (!this.listeners[eventName]) {
            throw new Error(`Event ${eventName} is not defined`);
        }
        this.listeners[eventName].forEach((callback: Function) => {
            callback(...args);
        });
    }
}
