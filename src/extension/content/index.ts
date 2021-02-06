import { inherits } from 'util';
import { Channels } from '../../utils/channels';
import { listenMessages, sendMessageRuntime } from '../../utils/messenger';
import { init } from './init';
import { listener } from "./listener";
import { state } from "./state";
import { ContentStateType } from "./types/state.types";

listenMessages<ContentStateType, any>(state, listener);

window.onload = () => {
    window.location.host === 'localhost:3000' && init();

    sendMessageRuntime({
        channel: Channels.PAGE_LOADED
    });
};