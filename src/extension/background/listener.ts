import { Channels } from "../utils/channels";
import { sendMessageRuntime } from "../utils/messenger";
import { BackgroundPlayloadMessageListenerTypes, MessageType, SetContentScriptStatusPlayloadMessage, SetPauseStatusPlayloadMessageType } from "../utils/types/messenger.types";
import { changeState } from "../utils/union";
import { init } from "./init";
import { BackgroundStateType, QueryStringDataType } from "./types/state.types";

export function listener(message: MessageType<BackgroundPlayloadMessageListenerTypes>, state: BackgroundStateType): void {
    switch(message.channel) {
        case Channels.INIT_BACKGROUND_SCRIPT: 
                init(<QueryStringDataType>message.playload.queryStringParams, state);
            break;
        case Channels.GET_PAUSE_STATUS:
                sendMessageRuntime<SetPauseStatusPlayloadMessageType>({
                    channel: Channels.SET_PAUSE_STATUS,
                    playload: {
                        isPause: state.isPause
                    }
                });
            break;
        case Channels.SET_PAUSE_STATUS:
                const { isPause }: SetPauseStatusPlayloadMessageType = message.playload;
                changeState<BackgroundStateType>(state, 'isPause', isPause);
            break;
        case Channels.SET_CONTENT_SCRIPT_STATUS:
                const { isContentScriptDone }: SetContentScriptStatusPlayloadMessage = message.playload;
                changeState<BackgroundStateType>(state, 'isContentScriptDone', isContentScriptDone);
            break;
    };
};