import { Channels } from "../channels";

export type MessageType<T> = {
    channel: Channels;
    playload?: T;
};

export type InitBackgroundPlayloadMessageType = {
    queryStringParams: string;
    isAuthMail: boolean;
    isApplyFiltersMail: boolean;
};

export type BackgroundPlayloadMessageListenerTypes = InitBackgroundPlayloadMessageType;

export type CallbackListenerType<T, K> = (message: MessageType<K>, state: T) => void;