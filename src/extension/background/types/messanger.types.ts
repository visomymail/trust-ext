import { Channels } from "../../../utils/channels";

export type MessageType = {
    channel: keyof typeof Channels;
};

export type MessageDataType = {
    channel: keyof typeof Channels;
    playload: any;
};