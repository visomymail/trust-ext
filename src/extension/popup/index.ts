import { Channels } from '../utils/channels';
import { listenMessages, sendMessageRuntime, sendMessageTabs } from '../utils/messenger';
import { SetPauseStatusPlayloadMessageType } from '../utils/types/messenger.types';
import { changeState } from '../utils/union';
import { listener } from "./listener";
import { state } from "./state";
import { PopupStateType } from "./types/state.types";

listenMessages<PopupStateType, any>(state, listener);

window.onload = () => {
    sendMessageRuntime({
        channel: Channels.GET_PAUSE_STATUS
    });
};

switcher.onclick = () => {
    changeState<PopupStateType>(state, 'isPause', !state.isPause);

    switcher.textContent = !state.isPause ? 'пауза' : 'продолжить';

    const message = {
        channel: Channels.SET_PAUSE_STATUS,
        playload: {
            isPause: state.isPause
        }
    };

    sendMessageTabs<SetPauseStatusPlayloadMessageType>(message);
    sendMessageRuntime<SetPauseStatusPlayloadMessageType>(message);
};