import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

import MainApi from '../api/mainApi';
import { UserActions } from './actions/user';
import userReducer from './reducers/user'

const mainApi = new MainApi();

export const getApiArguments = () => ({
  mainApi,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(getApiArguments())),
);

const rootReducer = combineReducers({
  userReducer,
});

export type State = ReturnType<typeof rootReducer>;
export type Actions = UserActions;

export const store = createStore(rootReducer, enhancer);

export const getStore = () => store;

export default store;
