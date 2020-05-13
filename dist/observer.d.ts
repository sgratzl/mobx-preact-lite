import { ForwardFn } from "preact/compat";
import { ClassAttributes, FunctionComponent } from 'preact';

export interface IObserverOptions {
    readonly forwardRef?: boolean;
}

/** Ensures that the props do not include ref at all */
type PropsWithoutRef<P> =
  // Just Pick would be sufficient for this, but I'm trying to avoid unnecessary mapping over union types
  // https://github.com/Microsoft/TypeScript/issues/28339
  'ref' extends keyof P
  ? Pick<P, Exclude<keyof P, 'ref'>>
  : P;

export declare function observer<P extends object, TRef = {}>(baseComponent: ForwardFn<P, TRef>, options: IObserverOptions & {
    forwardRef: true;
}): ForwardFn<PropsWithoutRef<P> & ClassAttributes<TRef>>;
export declare function observer<P extends object>(baseComponent: FunctionComponent<P>, options?: IObserverOptions): FunctionComponent<P>;
export declare function observer<C extends FunctionComponent<any> | ForwardFn<any>, Options extends IObserverOptions>(baseComponent: C, options?: Options): Options extends {
    forwardRef: true;
} ? C extends ForwardFn<infer P, infer TRef> ? C & ForwardFn<PropsWithoutRef<P> & ClassAttributes<TRef>> : never : C & {
    displayName: string;
};
