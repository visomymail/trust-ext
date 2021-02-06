import { CallbackListenerType, MessageType } from "./types/messenger.types";

export function sendMessageTabs(message: MessageType): void {
    chrome.tabs.query({}, (tabs: chrome.tabs.Tab[]) => {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
};

export function sendMessageRuntime(message: MessageType): void {
    chrome.runtime.sendMessage(message);
};

export function listenMessages<T>(state: T, listener: CallbackListenerType<T>): void {
    chrome.runtime.onMessage.addListener((message: MessageType) => { 
        listener(message, state);
    });
};