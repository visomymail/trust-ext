import { type } from "os";
import { ResponseCodes } from "../../../utils/union";

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