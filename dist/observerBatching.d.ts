interface IBatchedUpdates {
    batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
    batchedUpdates<A>(callback: (a: A) => any, a: A): void;
    batchedUpdates(callback: () => any): void;
}
export declare const observerBatching: (reactionScheduler?: IBatchedUpdates | undefined) => void;
export declare const observerBatchingOptOut: () => void;
export declare const isObserverBatched: () => any;
export {};
