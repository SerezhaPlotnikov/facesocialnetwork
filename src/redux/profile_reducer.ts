import { profileAPI } from '../api/api';
import { setError } from './app_reducer';

const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const TOOGLE_IS_FETCHING = 'profile/TOOGLE_IS_FETCHING';
const SET_STATUS = 'profile/SET_STATUS';

type contactType = {
  facebook?: string | null;
  website?: string | null;
  vk?: string | null;
  twitter?: string | null;
  instagram?: string | null;
  youtube?: string | null;
  github?: string | null;
  mainLink?: string | null;
};
type profileType = {
  aboutMe?: string | null;
  contact?: contactType;
};
type initialType = {
  profile: profileType | null;
  isFetching: boolean;
  status: string | null;
};

const initial: initialType = {
  profile: null,
  isFetching: true,
  status: null,
};
const profileReducer = (state = initial, action: any): initialType => {
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

type setUsersProfileType = {
  type: typeof SET_USERS_PROFILE;
  profile: profileType | null;
};
type SetIsFetchingTypes = {
  type: typeof TOOGLE_IS_FETCHING;
  isFetching: boolean;
};
type SetStatusType = {
  type: typeof SET_STATUS;
  status: string | null;
};

//Action-creaters
//Action = {type: SOMETHING_HERE!}
export const setUsersProfile = (profile: any): setUsersProfileType => {
  return { type: SET_USERS_PROFILE, profile };
};
export const setIsFetching = (isFetching: boolean): SetIsFetchingTypes => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};
export const setStatus = (status: string | null): SetStatusType => {
  return { type: SET_STATUS, status };
};

//Thunks
export const getProfile = (userId: number) => async (dispatch: any) => {
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
export const getStatus = (userId: number) => async (dispatch: any) => {
  try {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const updateStatus = (status: string | null) => async (
  dispatch: any
) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const updateProfile = (profile: any) => async (
  dispatch: any,
  setUserData: any
) => {
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
