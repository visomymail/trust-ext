import { BackgroundStateType } from "../background/types/state.types";
import { ContentStateType } from "../content/types/state.types";
import { getRandomBetween } from "./math";

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

export function parseURIPathnameBySymbol(symbol: string): string[] {
    return window.location.pathname.replace(/\//g, '').split(symbol);
};

export function getRandomArrayElement(array: any[]): any {
    return array[getRandomBetween(0, array.length - 1)];
};

export async function delay(time: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, time));
};

async function waitIfPause(isPause: boolean): Promise<void> {
    while (isPause) {
        await delay(1000);
    }
}

export function actionContent(callback: () => void, state: ContentStateType): void {
    waitIfPause(state.isPause);
    callback();
};

export async function actionBackground(callback: () => void, state: BackgroundStateType): Promise<void> {
    waitIfPause(state.isPause);

    while (!state.isContentScriptDone) {
        await delay(1000);
    }

    callback();
}