export namespace DOM {
    export function selectOnce<T extends HTMLElement>(selector: string): T {
        return globalThis.document.querySelector(selector);
    };

    export function selectAll<T extends HTMLElement>(selector: string): NodeListOf<T> {
        return globalThis.document.querySelectorAll(selector);
    };
};