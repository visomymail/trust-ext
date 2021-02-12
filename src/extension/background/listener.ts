import { Channels } from "../utils/channels";
import { BackgroundPlayloadMessageListenerTypes, MessageType } from "../utils/types/messenger.types";
import { init } from "./init";
import { BackgroundStateType, QueryStringDataType } from "./types/state.types";

export function listener(message: MessageType<BackgroundPlayloadMessageListenerTypes>, state: BackgroundStateType): void {
    switch(message.channel) {
        case Channels.INIT_BACKGROUND_SCRIPT: 
            init(<QueryStringDataType>message.playload.queryStringParams, state);    
    };
};