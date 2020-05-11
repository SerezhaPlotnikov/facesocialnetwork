import { profileAPI } from "../api/api";

const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

let initial = {
  profile: null,
  isFetching: true
};
const profileReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export let setUsersProfile = profile => {
  return { type: SET_USERS_PROFILE, profile };
};
export let setIsFetching = isFetching => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};

export const getProfile = userId => dispatch => {
  profileAPI.getUsersProfile(userId).then(response => {
    dispatch(setIsFetching(false));
    dispatch(setUsersProfile(response.data));
  });
};

export default profileReducer;
