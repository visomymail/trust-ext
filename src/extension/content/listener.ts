import { Channels } from "../utils/channels";
import { ContentPlayloadMessageListenerTypes, MakeMailAuthPlayloadMessageType, MessageType } from "../utils/types/messenger.types";
import { Mail } from "./corps/mail";
import { ContentStateType } from "./types/state.types";

export function listener(message: MessageType<ContentPlayloadMessageListenerTypes>, state: ContentStateType): void {
    switch(message.channel) {
        case Channels.MAKE_MAIL_AUTH:
            const {login, password}: MakeMailAuthPlayloadMessageType = message.playload;
            Mail.auth(login, password);
    };
};