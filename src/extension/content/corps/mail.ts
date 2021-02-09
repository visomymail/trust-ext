import { delay } from "../../../utils/union";

export namespace Mail {
    export async function auth(login: string, password: string): Promise<void> {
        try {
            delay(2500);
            (globalThis.document.querySelector('input[name*="login"]') as HTMLInputElement).value = login;
            globalThis.document.querySelector('input[name*="login"]').dispatchEvent(new Event('input'));
            delay(1000);
            
            (globalThis.document.querySelector('button[type="button"]') as HTMLButtonElement).click();
            delay(1000);
            
            (globalThis.document.querySelector('input[name*="password"]')  as HTMLInputElement).value = password;
            globalThis.document.querySelector('input[name*="password"]').dispatchEvent(new Event('input'));
            delay(1000);
            
            (globalThis.document.querySelectorAll('button[type="button"]')[1] as HTMLButtonElement).click();	
        } catch (e) { throw new Error('Mail auth error. Message: ' + e.message); }
    };
};