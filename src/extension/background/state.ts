import { BackgroundStateType } from "./types/state.types";

export const state: BackgroundStateType = {
    isPause: false,
    IP: undefined,
    proxies: [],
    subjects: [],
    answers: [],
    mails: [],
    userAgents: [],
    queryStringData: {
        login: undefined,
        password: undefined,
        thread: undefined
    }
};