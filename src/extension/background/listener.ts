import { Channels } from "../../utils/channels";
import { BackgroundPlayloadMessageListenerTypes, InitBackgroundPlayloadMessageType, MessageType } from "../../utils/types/messenger.types";
import { init } from "./init";
import { BackgroundStateType } from "./types/state.types";

export function listener(message: MessageType<BackgroundPlayloadMessageListenerTypes>, state: BackgroundStateType): void {
    switch(message.channel) {
        case Channels.INIT_BACKGROUND_SCRIPT: 
            init(<InitBackgroundPlayloadMessageType>message.playload);    
    };
};