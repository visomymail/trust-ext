import { type } from "os";
import { QueryStringDataType } from "../../extension/background/types/state.types";
import { Channels } from "../channels";

export type MessageType<T> = {
    channel: Channels;
    playload?: T;
};

export type InitBackgroundPlayloadMessageType = {
    queryStringParams: QueryStringDataType;
};

export type BackgroundPlayloadMessageListenerTypes = InitBackgroundPlayloadMessageType;

export type MakeMailAuthPlayloadMessageType = {
    login: string;
    password: string;
};

export type ContentPlayloadMessageListenerTypes = MakeMailAuthPlayloadMessageType;

export type CallbackListenerType<T, K> = (message: MessageType<K>, state: T) => void;