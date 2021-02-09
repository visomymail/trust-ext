import { ResponseCodes } from "../../../utils/codes";

export type GetIpOfCurrentMachineResponseType = {
    status: ResponseCodes;
    IP: string;
};

export type GetUserAgentsByIPResponseType = {
    status: ResponseCodes,
    agents: string[];
};

export type GetProxiesByIPResponseType = {
    status: ResponseCodes,
    proxies: string[];
};

export type GetMailsByIPResponseType = {
    status: ResponseCodes,
    mails: string[];
};

export type GetSubjectsByIPResponseType = {
    status: ResponseCodes,
    subjects: string[];
};

export type GetAnswersByIPResponseType = {
    status: ResponseCodes,
    answers: string[];
};