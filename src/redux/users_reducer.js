import { userAPI } from '../api/api';
import { setError } from '../redux/app_reducer';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING = 'TOOGLE_IS_FOLLOWING';

let initial = {
  users: [],
  count: 10,
  totalCount: 0,
  page: 1,
  isFetching: true,
  isFollowing: [],
};
const usersReducer = (state = initial, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.count };
    case SET_PAGE:
      return { ...state, page: action.page };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOOGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFetching
          ? [...state.isFollowing, action.id]
          : state.isFollowing.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export let follow = (id) => {
  return { type: FOLLOW, id };
};
export let unfollow = (id) => {
  return { type: UNFOLLOW, id };
};
export let setUsers = (users) => {
  return { type: SET_USERS, users };
};
export let setTotalCount = (count) => {
  return { type: SET_TOTAL_COUNT, count };
};
export let setPage = (page) => {
  return { type: SET_PAGE, page };
};
export let setIsFetching = (isFetching) => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};
export let setIsFollowing = (isFetching, id) => {
  return { type: TOOGLE_IS_FOLLOWING, isFetching, id };
};

export const getUsers = (page, count) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    const response = await userAPI.getUsers(page, count);
    dispatch(setIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount));
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const Unfollow = (id) => async (dispatch) => {
  dispatch(setIsFollowing(true, id));
  try {
    const response = await userAPI.getUnfollow(id);
    if (response.data.resultCode === 1) {
      dispatch(unfollow(id));
    } else {
      dispatch(setError(response.data.messages + ' error'));
      throw new Error('Something went wrong');
    }
    dispatch(setIsFollowing(false, id));
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const Follow = (id) => async (dispatch) => {
  dispatch(setIsFollowing(true, id));
  try {
    const response = await userAPI.getFollow(id);
    if (response.data.resultCode === 0) {
      dispatch(follow(id));
    }
    dispatch(setIsFollowing(false, id));
  } catch (error) {
    console.error(error.message);
    dispatch(setError(error.message));
  }
};

export default usersReducer;
