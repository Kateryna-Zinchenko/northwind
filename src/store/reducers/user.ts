import { createReducerFunction, ImmerReducer } from 'immer-reducer';

export interface IUser {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  permissions?: string[]
}

interface UserState {
  user: IUser | null,
}

const initialState: UserState = {
  user: null,
};

export class User extends ImmerReducer<UserState> {
  setUserData(user: IUser | null) {
    this.draftState.user = user;
  }
}

export default createReducerFunction(User, initialState);
