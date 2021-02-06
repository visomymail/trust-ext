import { Channels } from '../../utils/channels';
import { listenMessages, sendMessageRuntime } from '../../utils/messenger';
import { listener } from "./listener";
import { state } from "./state";
import { ContentStateType } from "./types/state.types";

listenMessages<ContentStateType>(state, listener);

async function INIT(): Promise<void> {
    const params = window.location.pathname.replace(/\//g, '');
}

window.onload = () => {
    window.location.host === 'localhost:3000' && INIT();

    sendMessageRuntime({
        channel: Channels.PAGE_LOADED
    });
};