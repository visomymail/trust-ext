import { listenMessages } from '../utils/messenger';
import { listener } from "./listener";
import { state } from "./state";
import { PopupStateType } from "./types/state.types";

listenMessages<PopupStateType, any>(state, listener);