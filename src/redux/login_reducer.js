import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initial = {
  id: null,
  email: null,
  login: null,
  isAuth: false
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
  payload: { id, email, login, isAuth }
});

// Thunk делает запрос на сервер и передает данные id email login в state
export const setAuth = () => dispatch => {
  authAPI.getAuth().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};
export const LoginAuth = (email, password, rememberMe) => dispatch => {
  authAPI.loginAuth(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuth());
    }
  });
};
export const LogoutAuth = () => dispatch => {
  authAPI.logoutAuth().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuth(null, null, null, false));
    }
  });
};

export default authReducer;
