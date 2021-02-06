import { listenMessages } from '../../utils/messenger';
import { listener } from './listener';
import { state } from './state';
import { BackgroundStateType } from './types/state.types';

listenMessages<BackgroundStateType>(state, listener);