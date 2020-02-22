export type Callback<T> = (payload: T) => void;
export type Provider<T> = () => T;
export type Delegate<U, V> = (payload: U) => V;
