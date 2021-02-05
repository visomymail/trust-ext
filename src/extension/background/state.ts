import { StateType } from "./types/state.types";

export const state: StateType = {
    isPause: false
};

export function changeState(state: StateType, key: keyof StateType, value: any): StateType {
    if (typeof value !== typeof state[key]) throw new Error('The value type is not assignable');

    state[key] = value;

    return state;
};