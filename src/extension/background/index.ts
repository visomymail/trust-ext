import { listenMessages } from '../utils/messenger';
import { BackgroundPlayloadMessageListenerTypes } from '../utils/types/messenger.types';
import { listener } from './listener';
import { state } from './state';
import { BackgroundStateType } from './types/state.types';

listenMessages<BackgroundStateType, BackgroundPlayloadMessageListenerTypes>(state, listener);