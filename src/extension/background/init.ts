import { InitBackgroundPlayloadMessageType } from "../../utils/types/messenger.types";

export async function init(data: InitBackgroundPlayloadMessageType): Promise<void> {
    const [login, password, thread]: string[] = data.queryStringParams.split(';');
};