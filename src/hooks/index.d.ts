/// <reference types="lodash" />
import { Dispatch, SetStateAction, DependencyList, MutableRefObject } from 'react';
export declare function useStateDebounced<T>(initialValue: T, delay: number): [state: T, debouncedState: T, setState: Dispatch<SetStateAction<T>>];
export declare function useStateTracked<T>(trackedValue: T): [T, Dispatch<SetStateAction<T>>];
export declare function useToggleTracked(trackedState: boolean, canTrackFn?: (trackedValue: boolean) => boolean, initialValue?: boolean): [toggleState: boolean, toggleFn: (stateFn?: (oldValue: boolean) => boolean) => void];
export declare function useRandomState(): {
    randomState: number;
    randomize: () => void;
};
export declare function useIntervalMemo<T>(fn: () => T, interval: number): T;
export declare function useAsyncDebouncedTrigger<T>(asyncEffectCallback: (v?: T) => Promise<void>, delay: number): {
    trigger: import("lodash").DebouncedFunc<(v?: T) => Promise<void>>;
};
export declare function useDebouncedTrigger<T>(effectCallback: (v?: T) => void, delay: number): {
    trigger: import("lodash").DebouncedFunc<(v?: T) => void>;
};
export declare function useAsyncDebouncedStateEffect<T>(asyncEffectCallback: (debouncedValue: T) => Promise<void>, delay: number, initialValue?: T, memo?: boolean): (NonNullable<T> | Dispatch<SetStateAction<NonNullable<T> | null>> | null)[];
export declare function useDebouncedStateEffect<T>(effectCallback: (debouncedValue: T) => void, delay: number, initialValue?: T, memo?: boolean): (NonNullable<T> | Dispatch<SetStateAction<NonNullable<T> | null>> | null)[];
export declare function useDebouncedFnAsync<T>(fn: (v?: T) => Promise<void | unknown>, delay: number): import("lodash").DebouncedFunc<(v?: any) => Promise<unknown>>;
export declare function useDebouncedFn<T>(fn: (v?: T) => void | unknown, delay: number): import("lodash").DebouncedFunc<(v?: any) => unknown>;
export declare function useCachedState<T>(priorityState: T): [T, (v: T) => void, Dispatch<SetStateAction<T>>];
export declare function useDebouncedEffect(callbackFn: () => void, delay: number, deps?: unknown[]): void;
export declare function useThrottledEffect(callbackFn: () => void, wait: number, deps?: unknown[]): void;
export declare function useRefEffect<T>(initialValue: T, effectFn: (ref: MutableRefObject<T>, setRefValue: (newValue: T) => void) => void, deps?: DependencyList): [MutableRefObject<T>, (newRefValue: T) => void];
export declare function useEmptyRefEffect(effectFn: (ref: MutableRefObject<unknown>, setRefValue: (newValue: unknown) => void) => void, deps?: DependencyList): [MutableRefObject<unknown>, (newRefValue: unknown) => void];
export declare function useRefTracked<T>(trackedValue: T): [MutableRefObject<T>, (newRefValue: T) => void];
export declare function useDebouncedLayoutEffect(callbackFn: () => void, delay: number, deps?: unknown[]): void;
export declare function useThrottledLayoutEffect(callbackFn: () => void, wait: number, deps?: unknown[]): void;
type ComputeFn<T> = (val: T, ...deps: any[]) => T | Promise<T>;
export declare function useComputed<T>(fn: ComputeFn<T>, deps: DependencyList, initial: T): T;
export {};
