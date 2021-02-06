import { API_REMOTE_PATH_URI } from "../../utils/constants";
import { GetIpOfCurrentMachineResponseType } from "./types/get.types";

async function GET<T>(action: string): Promise<T> {
    const response = await fetch(`${API_REMOTE_PATH_URI}?action=${action}`);

    return await response.json();
};

export async function getIPOfCurrentMachine(): Promise<GetIpOfCurrentMachineResponseType> {
    return GET<GetIpOfCurrentMachineResponseType>('get_ip');
};