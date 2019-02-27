import * as types from "../config/action-types/authenticate";

const initialState = {
  isAuth: false,
  requestingAuth: false,
  clearingAuth: false,
  authSession: null,
  authError: "",
  requestingRestore: true,
  logoutError: ""
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST: // When a login request action has been dispatched
      return { // See more on actions/authenticate.js on line 19 - 38
        ...state,
        requestingAuth: true,
        authError: ""
      };
    case types.LOGIN_SUCCESS: // When a Login success action has been dispatched
      return { // See more on actions/authenticate.js on line 19 - 38
        ...state,
        isAuth: true,
        authSession: action.data.session,
        requestingRestore: false,
        requestingAuth: false
      };
    case types.LOGIN_FAILED: // When a login failed action has been dispatched
      return { // See more on actions/authenticate.js on line 19 - 38
        ...state,
        requestingAuth: false,
        authError: action.data.error
      };
    case types.LOGOUT_REQUEST: // When a logout request action has been dispatched
      return { // See more on actions/authenticate.js on line 56 - 68
        ...state,
        clearingAuth: true,
        authError: ""
      };
    case types.LOGOUT_SUCCESS: // When a logout success action has been dispatched
      return { // See more on actions/authenticate.js on line 56 - 68
        ...state,
        isAuth: false,
        clearingAuth: false,
        authSession: null,
        authError: ""
      };
    case types.LOGOUT_FAILED: // When a logout failed action has been dispatched
      return { // See more on actions/authenticate.js on line 56 - 68
        ...state,
        clearingAuth: false,
        authError: action.data.error
      };
    case types.RESTORE_REQUEST: // When a restore request action has been dispatched
      return { // See more on actions/authenticate.js on line 40 - 54
        ...state,
        requestingRestore: true
      };
    case types.RESTORE_FAILED: // When restoring a session action has been despatched
      return { // See more on actions/authenticate.js on line 40 - 54
        ...state,
        requestingRestore: false
      };
    default:
      return state;
  }
}
