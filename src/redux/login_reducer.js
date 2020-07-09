import { authAPI } from '../api/api';
import { setError } from '../redux/app_reducer';

const SET_USER_DATA = 'SET_USER_DATA';

let initial = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export let setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const setAuth = () => async (dispatch) => {
  try {
    const response = await authAPI.getAuth();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const LoginAuth = (email, password, rememberMe) => async (dispatch) => {
  try {
    const response = await authAPI.loginAuth(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(setAuth());
    } else {
      dispatch(setError(response.data.messages));
      throw new Error('Something went wrong');
    }
  } catch (error) {
    debugger;
    console.error(error);
    dispatch(setError(error.massage));
  }
};
export const LogoutAuth = () => async (dispatch) => {
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
