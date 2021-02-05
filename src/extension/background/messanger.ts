import { Channels } from '../../utils/channels';
import { MessageDataType, MessageType } from './types/messanger.types';
import { StateType } from './types/state.types';

export function listenMessages(state: StateType): void {
    chrome.runtime.onMessage.addListener((message: MessageType) => {
        switch(message.channel) {
            case Channels.GET_PAUSE_STATUS:
                break;
        }
    });
};

export function sendMessage(message: MessageDataType): void {
    chrome.tabs.query({}, (tabs: chrome.tabs.Tab[]) => {
        chrome.tabs.sendMessage(tabs[0].id, message.playload);
    });
};