import { Channels } from "../../utils/channels";
import { sendMessageRuntime } from "../../utils/messenger";
import { InitBackgroundPlayloadMessageType } from "../../utils/types/messenger.types";

export async function init(): Promise<void> {
    const queryStringParams: string = window.location.pathname.replace(/\//g, '');

    sendMessageRuntime<InitBackgroundPlayloadMessageType>({
        channel: Channels.INIT_BACKGROUND_SCRIPT,
        playload: {
            queryStringParams
        }
    });
};