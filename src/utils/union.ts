export function changeState<T>(state: T, key: keyof T, value: any): T {
    if (typeof value !== typeof state[key]) throw new Error('The value type is not assignable');

    state[key] = value;

    return state;
};

export function sync(callback: any, ...args: any): Promise<void> {
    return new Promise(resolve => {
        callback(...args, resolve);
    });
};