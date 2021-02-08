import { stat } from "fs/promises";
import { changeState } from "../../utils/union";
import { getIPOfCurrentMachine, getProxiesByIP, getUserAgentsByIP } from "../api/get";
import { BackgroundStateType, QueryStringDataType } from "./types/state.types";

export async function init(queryStringData: QueryStringDataType, state: BackgroundStateType): Promise<void> {
    changeState<BackgroundStateType>(state, 'IP', await getIPOfCurrentMachine());
    changeState<BackgroundStateType>(state, 'userAgents', await getUserAgentsByIP(state.IP));
    changeState<BackgroundStateType>(state, 'proxies', await getProxiesByIP(state.IP));
    changeState<BackgroundStateType>(state, 'queryStringData', queryStringData);
};