import { API_REMOTE_PATH_URI } from "../../utils/constants";
import { GetIpOfCurrentMachineResponseType, GetProxiesByIPResponseType, GetUserAgentsByIPResponseType } from "./types/get.types";

async function GET<T>(action: string, bearer: string = 'undefind'): Promise<T> {
    const result = await fetch(`${API_REMOTE_PATH_URI}?action=${action}`, {
        method: 'GET',
        headers: {
            'X-Auth-Bearer': bearer
        }
    });
    const response = await result.json();

    if (response.status !== 200) 
    throw new Error(`Bad request. Action: ${action}. Status: ${response.status}.`);

    return response;
};

export async function getIPOfCurrentMachine(): Promise<string> {
    return (await GET<GetIpOfCurrentMachineResponseType>('get_ip')).IP;
};

export async function getUserAgentsByIP(bearer: string): Promise<string[]> {
    return await (await GET<GetUserAgentsByIPResponseType>('get_agents', bearer)).agents;
};

export async function getProxiesByIP(bearer: string): Promise<string[]> {
    return (await GET<GetProxiesByIPResponseType>('get_proxies', bearer)).proxies;
};