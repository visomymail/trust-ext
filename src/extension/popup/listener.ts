import { Channels } from "../utils/channels";
import { changeState } from "../utils/union";
import { MessageType } from "../utils/types/messenger.types";
import { PopupStateType } from "./types/state.types";

declare const switcher: HTMLButtonElement;

export function listener<T>(message: MessageType<T>, state: PopupStateType): void {
    switch(message.channel) {
        
    };
};