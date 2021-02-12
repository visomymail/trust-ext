import { Channels } from "../utils/channels";
import { sendMessageRuntime } from "../utils/messenger";
import { InitBackgroundPlayloadMessageType } from "../utils/types/messenger.types";
import { parseURIPathnameBySymbol } from "../utils/union";

export async function init(): Promise<void> {
    const [login, password, thread]: string[] = parseURIPathnameBySymbol(';');

    sendMessageRuntime<InitBackgroundPlayloadMessageType>({
        channel: Channels.INIT_BACKGROUND_SCRIPT,
        playload: {
            queryStringParams: {
                login,
                password,
                thread
            }
        }
    });
};