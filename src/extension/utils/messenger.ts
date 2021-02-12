import { CallbackListenerType, MessageType } from "./types/messenger.types";

export function sendMessageTabs<T>(message: MessageType<T>): void {
    chrome.tabs.query({}, (tabs: chrome.tabs.Tab[]) => {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
};

export function sendMessageRuntime<T>(message: MessageType<T>): void {
    chrome.runtime.sendMessage(message);
};

export function listenMessages<T, K>(state: T, listener: CallbackListenerType<T, K>): void {
    chrome.runtime.onMessage.addListener((message: MessageType<K>) => { 
        listener(message, state);
    });
};