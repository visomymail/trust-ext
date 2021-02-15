import { Channels } from "../utils/channels";
import { changeState } from "../utils/union";
import { SetPauseStatusPlayloadMessageType, MessageType, PopupPlayloadMessageListenerTypes } from "../utils/types/messenger.types";
import { PopupStateType } from "./types/state.types";

export function listener(message: MessageType<PopupPlayloadMessageListenerTypes>, state: PopupStateType): void {
    switch(message.channel) {
        case Channels.SET_PAUSE_STATUS:
            const { isPause }: SetPauseStatusPlayloadMessageType = message.playload;
            changeState<PopupStateType>(state, 'isPause', isPause);

            switcher.hidden = false;
            switcher.textContent = !isPause ? 'пауза' : 'продолжить';
    };
};