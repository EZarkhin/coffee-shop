// @flow
import types from './types'

type State = {
  userType: string | null,
  isAuthorized: boolean,
  loading: boolean,
  error: any,
}

type Action = {
  type: string,
  payload: any,
}

const initialState: State = {
  userType: null,
  isAuthorized: false,
  loading: false,
  error: null,
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.LOGIN_REQUEST: 
      return {
        ...state,
        loading: true,
      }
    case types.LOGIN_SUCCESS: 
      return {
        ...state,
        loading: false,
        userType: action.payload.userType,
        isAuthorized: true,
      }
    case types.LOGIN_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case types.LOGOUT:
      return initialState
    default: return state
  }
};