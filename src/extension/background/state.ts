import { BackgroundStateType } from "./types/state.types";

export const state: BackgroundStateType = {
    isPause: false,
    IP: undefined,
    proxies: [],
    subjects: [],
    answers: [],
    mails: [],
    userAgents: [],
    isContentScriptDone: false,
    queryStringData: {
        login: undefined,
        password: undefined,
        thread: undefined
    }
};