import { DOM } from "../../../../utils/DOM";
import { actionContent, delay } from "../../../../utils/union";
import { ContentStateType } from "../../../types/state.types";

export default async function auth(state: ContentStateType, login: string, password: string): Promise<void> {
    try {
        await delay(2500);
        actionContent(() => {
            const inputLoginElement: HTMLInputElement = DOM.selectOnce<HTMLInputElement>('input[name*="login"]');
            inputLoginElement.value = login;
            inputLoginElement.dispatchEvent(new Event('input'));
        }, state); 
        await delay(1000);
        
        actionContent(() => {
            DOM.selectOnce<HTMLButtonElement>('button[type="button"]').click();
        }, state); 
        await delay(1000);
        
        actionContent(() => {
            const inputPasswordElement: HTMLInputElement = DOM.selectOnce<HTMLInputElement>('input[name*="password"]');
            inputPasswordElement.value = password;
            inputPasswordElement.dispatchEvent(new Event('input'));
        }, state); 
        await delay(1000);
        
        actionContent(() => {
            DOM.selectAll<HTMLButtonElement>('button[type="button"]')[1].click();	
        }, state); 
    } catch (e) { throw new Error('Mail auth error. Message: ' + e.message); }
};