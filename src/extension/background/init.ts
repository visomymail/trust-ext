import { InitBackgroundPlayloadMessageType } from "../../utils/types/messenger.types";
import { changeState } from "../../utils/union";
import { getIPOfCurrentMachine, getUserAgentsByIP } from "../api/get";
import { BackgroundStateType } from "./types/state.types";

export async function init(data: InitBackgroundPlayloadMessageType, state: BackgroundStateType): Promise<void> {
    const [login, password, thread]: string[] = data.queryStringParams.split(';');

    changeState<BackgroundStateType>(state, 'IP', (await getIPOfCurrentMachine()).IP);
    changeState<BackgroundStateType>(state, 'userAgents', (await getUserAgentsByIP(state.IP)).agents);
};