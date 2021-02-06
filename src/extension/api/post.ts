import { API_REMOTE_PATH_URI, DEFAULT_POST_HEADERS } from "../../utils/constants";
import { PostHeaderType } from "./types/post.types";

async function POST<T>(action: string, body: string, headers: PostHeaderType = {}): Promise<void> {
    await fetch(`${API_REMOTE_PATH_URI}?action=${action}`, {
        method: 'POST',
        headers: Object.assign(DEFAULT_POST_HEADERS, headers),
        body: body
    });
};