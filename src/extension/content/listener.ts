import { MessageType } from "../../utils/types/messenger.types";
import { ContentStateType } from "./types/state.types";

export function listener<T>(message: MessageType<T>, state: ContentStateType): void {
    switch(message.channel) {

    };
};