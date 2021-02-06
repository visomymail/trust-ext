import { Channels } from "../channels";

export type MessageType = {
    channel: Channels;
    playload?: any;
};

export type CallbackListenerType<T> = (message: MessageType, state: T) => void;