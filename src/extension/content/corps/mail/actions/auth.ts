import { DOM } from "../../../../utils/DOM";
import { actionContent, delay } from "../../../../utils/union";
import { ContentStateType } from "../../../types/state.types";

export default function auth(state: ContentStateType, login: string, password: string): void {
    try {
        actionContent(() => typeLogin(login), state);
        actionContent(() => typePassword(password), state);
    } catch (e) { throw new Error('Mail auth error. Message: ' + e.message); }
};

async function typePassword(password: string): Promise<void> {
    const inputPasswordElement: HTMLInputElement = DOM.selectOnce<HTMLInputElement>('input[name*="password"]');
    inputPasswordElement.value = password;
    inputPasswordElement.dispatchEvent(new Event('input'));

    await delay(1000);

    DOM.selectAll<HTMLButtonElement>('button[type="button"]')[1].click();	
};

async function typeLogin(login: string): Promise<void> {
    const inputLoginElement: HTMLInputElement = DOM.selectOnce<HTMLInputElement>('input[name*="login"]');
    inputLoginElement.value = login;
    inputLoginElement.dispatchEvent(new Event('input'));

    await delay(1000);

    DOM.selectOnce<HTMLButtonElement>('button[type="button"]').click();
};