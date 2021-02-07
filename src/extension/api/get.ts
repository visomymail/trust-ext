import { API_REMOTE_PATH_URI } from "../../utils/constants";
import { GetIpOfCurrentMachineResponseType, GetProxiesByIPResponseType, GetUserAgentsByIPResponseType } from "./types/get.types";

async function GET<T>(action: string, bearer: string = 'undefind'): Promise<T> {
    const response = await fetch(`${API_REMOTE_PATH_URI}?action=${action}`, {
        method: 'GET',
        headers: {
            'X-Bearer': bearer
        }
    });

    return await response.json();
};

export async function getIPOfCurrentMachine(): Promise<GetIpOfCurrentMachineResponseType> {
    return GET<GetIpOfCurrentMachineResponseType>('get_ip');
};

export async function getUserAgentsByIP(bearer: string): Promise<GetUserAgentsByIPResponseType> {
    return GET<GetUserAgentsByIPResponseType>('get_agents', bearer);
};

export async function getProxiesByIP(bearer: string): Promise<GetProxiesByIPResponseType> {
    return GET<GetProxiesByIPResponseType>('get_proxies', bearer);
};