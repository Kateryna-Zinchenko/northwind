import { ThunkAction } from 'redux-thunk';
import { Actions, getApiArguments, State } from '../index';

type ExtraArguments = ReturnType<typeof getApiArguments>;

export type AsyncAction<R = void> = Actions | ThunkAction<R, State, ExtraArguments, Actions>;
