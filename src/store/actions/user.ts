import { createActionCreators } from 'immer-reducer';

import { AsyncAction } from './common';
import { IUser, User } from '../reducers/user';

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<| typeof userActions.setUserData>;

export const getUser = (): AsyncAction => async (dispatch: (arg0: { type: 'setUserData'; payload: IUser | null; }) => void, _: any, { userApi }: any) => {
  try {

    const response = await userApi.getUser();

    dispatch(userActions.setUserData(response));
  } catch (e: any) {
    console.log(e);
  }
};
