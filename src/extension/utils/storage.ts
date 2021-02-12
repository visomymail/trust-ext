import { CallbackResolveType } from "./types/storage.types";
import { sync } from "./union";

export async function getStorage(key: string, resolve: CallbackResolveType) {
    chrome.storage.sync.get(key, (items: any) => { resolve(items[key]) });
};

export async function setStorage<T>(items: T, resolve: CallbackResolveType): Promise<void> {
    chrome.storage.sync.set(items, () => resolve(true));
};

export async function hasStorageKey(key: string): Promise<boolean> {
    return !!(await sync(getStorage, key));
};