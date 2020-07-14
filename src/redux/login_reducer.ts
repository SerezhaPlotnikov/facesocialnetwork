import { authAPI } from '../api/api';
import { setError } from '../redux/app_reducer';

const SET_USER_DATA = 'SET_USER_DATA';

type initialType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

let initial: initialType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initial, action: any): initialType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

type setUserDataTypeAction = {
  type: typeof SET_USER_DATA;
  payload: {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};

export let setUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setUserDataTypeAction => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const setAuth = () => async (dispatch: any) => {
  try {
    const response = await authAPI.getAuth();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    } else {
      dispatch(setError(response.data.messages));
      throw new Error('Something went wrong');
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const LoginAuth = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  try {
    const response = await authAPI.loginAuth(email, password, rememberMe);
    debugger;
    if (response.data.resultCode === 0) {
      dispatch(setAuth());
    } else {
      dispatch(setError(response.data.messages));
      throw new Error('Something went wrong');
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const LogoutAuth = () => async (dispatch: any) => {
  try {
    const response = await authAPI.logoutAuth();
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};

export default authReducer;
