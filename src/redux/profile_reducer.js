import { profileAPI } from '../api/api';
import { setError } from '../redux/app_reducer';

const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const TOOGLE_IS_FETCHING = 'profile/TOOGLE_IS_FETCHING';
const SET_STATUS = 'profile/SET_STATUS';

let initial = {
  profile: null,
  isFetching: true,
  status: null,
};
const profileReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export let setUsersProfile = (profile) => {
  return { type: SET_USERS_PROFILE, profile };
};
export let setIsFetching = (isFetching) => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};
export let setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const getProfile = (userId) => async (dispatch) => {
  try {
    const response = await profileAPI.getUsersProfile(userId);
    if (response.status === 200) {
      dispatch(setIsFetching(false));
      dispatch(setUsersProfile(response.data));
    } else {
      dispatch(setError(response.statusText));
      throw new Error('Something went wrong');
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const getStatus = (userId) => async (dispatch) => {
  try {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const updateStatus = (status) => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const updateProfile = (profile) => async (dispatch, setUserData) => {
  try {
    const userId = setUserData().auth.id;
    const response = await profileAPI.updateProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(setUsersProfile(profile));
      dispatch(getProfile(userId));
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export default profileReducer;
