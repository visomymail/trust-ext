import { MessageType } from './types/listener.types';
import { StateType } from './types/state.types';

export function listen(state: StateType): void {
    chrome.runtime.onMessage.addListener((message: MessageType) => {
        switch(message.channel) {

        }
    });
}