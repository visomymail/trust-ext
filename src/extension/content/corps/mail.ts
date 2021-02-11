import { DOM } from "../../../utils/DOM";
import { delay } from "../../../utils/union";

export namespace Mail {
    export async function auth(login: string, password: string): Promise<void> {
        try {
            delay(2500);
            const inputLoginElement: HTMLInputElement = DOM.selectOnce<HTMLInputElement>('input[name*="login"]');
            inputLoginElement.value = login;
            inputLoginElement.dispatchEvent(new Event('input'));
            delay(1000);
            
            DOM.selectOnce<HTMLButtonElement>('button[type="button"]').click();
            delay(1000);
            
            const inputPasswordElement: HTMLInputElement = DOM.selectOnce<HTMLInputElement>('input[name*="password"]');
            inputPasswordElement.value = password;
            inputPasswordElement.dispatchEvent(new Event('input'));
            delay(1000);
            
            DOM.selectAll<HTMLButtonElement>('button[type="button"]')[1].click();	
        } catch (e) { throw new Error('Mail auth error. Message: ' + e.message); }
    };

    export async function upSpam(isUpSpamAllDomains: boolean, allowedDomains: string[]): Promise<void> {
       
    };
};