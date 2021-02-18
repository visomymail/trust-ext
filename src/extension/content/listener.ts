import { mainModule } from "process";
import { Channels } from "../utils/channels";
import { ContentPlayloadMessageListenerTypes, MakeMailAuthPlayloadMessageType, MessageType } from "../utils/types/messenger.types";
import { Mail } from "./corps/mail/index";
import { ContentStateType } from "./types/state.types";

export function listener(message: MessageType<ContentPlayloadMessageListenerTypes>, state: ContentStateType): void {
    switch(message.channel) {
        case Channels.CONTENT_MAIL_MAKE_AUTH:
                const {login, password}: MakeMailAuthPlayloadMessageType = message.playload;
                Mail.auth(state, login, password);
            break;
        case Channels.CONTENT_MAIL_UP_SPAM:
               Mail.upMail(state);
            break;
    };
};