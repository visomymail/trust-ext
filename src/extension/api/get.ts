import { API_REMOTE_PATH_URI } from "../utils/constants";
import { GetAnswersByIPResponseType, GetIpOfCurrentMachineResponseType, GetMailsByIPResponseType, GetProxiesByIPResponseType, GetSubjectsByIPResponseType, GetUserAgentsByIPResponseType } from "./types/get.types";

async function GET<T>(action: string, bearer: string = 'undefind'): Promise<T> {
    const response = await fetch(`${API_REMOTE_PATH_URI}?action=${action}`, {
        method: 'GET',
        headers: {
            'X-Auth-Bearer': bearer
        }
    });

    if (response.status !== 200) 
    throw new Error(`Bad request. Action: ${action}. Status: ${response.status}.`);

    return await response.json();
};

export async function getIPOfCurrentMachine(): Promise<string> {
    return (await GET<GetIpOfCurrentMachineResponseType>('get_ip')).IP;
};

export async function getUserAgentsByIP(bearer: string): Promise<string[]> {
    return (await GET<GetUserAgentsByIPResponseType>('get_agents', bearer)).agents.split('\n');
};

export async function getProxiesByIP(bearer: string): Promise<string[]> {
    return (await GET<GetProxiesByIPResponseType>('get_proxies', bearer)).proxies.split('\n');
};

export async function getMailsByIP(bearer: string): Promise<string[]>{
    return (await GET<GetMailsByIPResponseType>('get_mails', bearer)).mails.split('\n');  
};

export async function getAnswersByIP(bearer: string): Promise<string[]>{
    return (await GET<GetAnswersByIPResponseType>('get_answers', bearer)).answers.split('\n');  
};

export async function getSubjectsByIP(bearer: string): Promise<string[]>{
    return (await GET<GetSubjectsByIPResponseType>('get_subjects', bearer)).subjects.split('\n');  
};