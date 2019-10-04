export abstract class EventBase<T> {
    abstract validate(payload: T): void;
}