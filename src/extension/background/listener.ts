import { Channels } from "../../utils/channels";
import { sendMessageRuntime } from "../../utils/messenger";
import { MessageType } from "../../utils/types/messenger.types";
import { BackgroundStateType } from "./types/state.types";

export function listener(message: MessageType, state: BackgroundStateType): void {
    switch(message.channel) {
                
    };
};