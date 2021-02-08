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