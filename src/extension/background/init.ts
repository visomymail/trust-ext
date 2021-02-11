import { changeState } from "../../utils/union";
import { getAnswersByIP, getIPOfCurrentMachine, getMailsByIP, getProxiesByIP, getSubjectsByIP, getUserAgentsByIP } from "../api/get";
import { loop } from "./loop";
import { BackgroundStateType, QueryStringDataType } from "./types/state.types";

export async function init(queryStringData: QueryStringDataType, state: BackgroundStateType): Promise<void> {
    changeState<BackgroundStateType>(state, 'IP', await getIPOfCurrentMachine());
    changeState<BackgroundStateType>(state, 'userAgents', await getUserAgentsByIP(state.IP));
    changeState<BackgroundStateType>(state, 'proxies', await getProxiesByIP(state.IP));
    changeState<BackgroundStateType>(state, 'mails', await getMailsByIP(state.IP));
    changeState<BackgroundStateType>(state, 'answers', await getAnswersByIP(state.IP));
    changeState<BackgroundStateType>(state, 'subjects', await getSubjectsByIP(state.IP));
    changeState<BackgroundStateType>(state, 'queryStringData', queryStringData);

    loop(state);
};