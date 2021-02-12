import { Channels } from '../utils/channels';
import { listenMessages, sendMessageRuntime } from '../utils/messenger';
import { ContentPlayloadMessageListenerTypes } from '../utils/types/messenger.types';
import { init } from './init';
import { listener } from "./listener";
import { state } from "./state";
import { ContentStateType } from "./types/state.types";

listenMessages<ContentStateType, ContentPlayloadMessageListenerTypes>(state, listener);

window.onload = () => {
    window.location.host === 'localhost:3000' && init();

    sendMessageRuntime({
        channel: Channels.CONTENT_PAGE_LOADED
    });
};