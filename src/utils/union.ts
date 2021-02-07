export function changeState<T>(state: T, key: keyof T, value: any): T {
    if (typeof value !== typeof state[key]) throw new Error('The value type is not assignable');

    state[key] = value;

    return state;
};

export function sync(callback: any, ...args: any): Promise<any> {
    return new Promise(resolve => {
        callback(...args, resolve);
    });
};

export enum ResponseCodes {
    OK_GET_GOOD_RESPONSE = 200,
    OK_POST_GOOD_RESPONSE = 201,
    ERROR_NOT_AUTH_RESPONSE = 401,
    ERROR_BAD_REQUEST_RESPONSE = 400,
    ERROR_FORBIDDEN_RESPONSE = 403,
    ERROR_NOT_FOUND_RESPONSE = 404,
};