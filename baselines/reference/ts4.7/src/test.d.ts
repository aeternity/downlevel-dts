export class C {
    get p(): number;
    set p(value: number);
    get q(): string;
    set r(value: boolean);
}
export namespace N {
    class D {
        get p(): number;
        set p(value: number);
        get q(): string;
        set r(value: boolean);
    }
}
export type { C as DetectiveComics };
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
export interface E {
    a: number;
    b: number;
}
export type F = Omit<E, 'a'>;
export type Getter<out T> = () => T;
export type Setter<in T> = (value: T) => void;
export interface State<in out T> {
    get: () => T;
    set: (value: T) => void;
}
declare function genericFunction<T>(): T;
export type N = typeof genericFunction<number>;
