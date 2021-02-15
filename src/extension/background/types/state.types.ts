export type QueryStringDataType = {
    login: string | undefined;
    password: string | undefined;
    thread: string | undefined;
};

export type BackgroundStateType = {
    isPause: boolean;
    IP: string | undefined;
    answers: string[];
    subjects: string[];
    userAgents: string[];
    proxies: string[];
    mails: string[];
    isContentScriptDone: boolean;
    queryStringData: QueryStringDataType;
};