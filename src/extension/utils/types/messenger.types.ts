import { type } from "os";
import { QueryStringDataType } from "../../background/types/state.types";
import { Channels } from "../channels";

export type MessageType<T> = {
    channel: Channels;
    playload?: T;
};

export type InitBackgroundPlayloadMessageType = {
    queryStringParams: QueryStringDataType;
};


export type MakeMailAuthPlayloadMessageType = {
    login: string;
    password: string;
};


export type SetPauseStatusPlayloadMessageType = {
    isPause: boolean;
};

export type SetContentScriptStatusPlayloadMessage = {
    isContentScriptDone: boolean;
};

export type PopupPlayloadMessageListenerTypes = SetPauseStatusPlayloadMessageType;

export type BackgroundPlayloadMessageListenerTypes = InitBackgroundPlayloadMessageType & 
                                                     SetPauseStatusPlayloadMessageType &
                                                     SetContentScriptStatusPlayloadMessage;

export type ContentPlayloadMessageListenerTypes = MakeMailAuthPlayloadMessageType;

export type CallbackListenerType<T, K> = (message: MessageType<K>, state: T) => void;