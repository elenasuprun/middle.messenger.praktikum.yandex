import { SafeFunction } from '../types/safeFunction.ts';

export class EventBus {
    private listeners: Record<string, SafeFunction[]> = {};

    on(eventName: string, callback: SafeFunction): void {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    }

    off(eventName: string, callback: SafeFunction): void {
        if (!this.listeners?.[eventName]) {
            throw new Error(`Event ${eventName} is not defined`);
        }
        this.listeners[eventName] = this.listeners[eventName]
            .filter(cb => cb !== callback);
    }

    emit(eventName: string, ...args: unknown[]): void {
        if (!this.listeners[eventName]) {
            throw new Error(`Event ${eventName} is not defined`);
        }
        this.listeners[eventName].forEach((callback: SafeFunction) => {
            callback(...args);
        });
    }
}
