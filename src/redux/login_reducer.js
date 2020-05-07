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
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};
export let serUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login }
});

export default authReducer;
