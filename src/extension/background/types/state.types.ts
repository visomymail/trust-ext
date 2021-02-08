export type QueryStringDataType = {
    login: string | undefined;
    password: string | undefined;
    thread: string | undefined;
};

export type BackgroundStateType = {
    isPause: boolean;
    IP: string | undefined;
    userAgents: string[];
    proxies: string[];
    queryStringData: QueryStringDataType;
};