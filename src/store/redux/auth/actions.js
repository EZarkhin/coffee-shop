// @flow
import types from './types';

type Action = {
  type: string,
  payload: any,
}

export default Object.freeze({
  loginRequest: (payload: any): Action => ({
    type: types.LOGIN_REQUEST,
    payload,
  }),
  loginSuccess: (payload: any): Action => ({
    type: types.LOGIN_SUCCESS,
    payload,
  }),
  loginError: (payload: any): Action => ({
    type: types.LOGIN_ERROR,
    payload,
  }),
})