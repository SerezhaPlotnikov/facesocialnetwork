import { userAPI } from '../api/api';
import { setError } from '../redux/app_reducer';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING = 'TOOGLE_IS_FOLLOWING';

type usersType = {
  name: string;
  id: number;
  uniqueUrlName?: number | null;
  photo: { small?: string | null; large?: string | null };
  status: string | null;
  followed: boolean;
};
type initialType = {
  users: Array<usersType>;
  count: number | null;
  totalCount: number | null;
  page: number | null;
  isFetching: boolean;
  isFollowing: { id: string; followed: boolean }[];
};

const initial: initialType = {
  users: [],
  count: 10,
  totalCount: 0,
  page: 1,
  isFetching: true,
  isFollowing: [],
};
const usersReducer = (state = initial, action: any): initialType => {
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
type followType = {
  type: typeof FOLLOW;
  id: number;
};
type unfollowType = {
  type: typeof UNFOLLOW;
  id: number;
};
type setUsersType = {
  type: typeof SET_USERS;
  users: Array<usersType>;
};
type setTotalCountType = {
  type: typeof SET_TOTAL_COUNT;
  count: number;
};
type setPageType = {
  type: typeof SET_PAGE;
  page: number;
};
type setIsFetchingType = {
  type: typeof TOOGLE_IS_FETCHING;
  isFetching: boolean;
};
type setIsFollowingType = {
  type: typeof TOOGLE_IS_FOLLOWING;
  isFetching: boolean;
  id: number;
};
export let follow = (id: number): followType => {
  return { type: FOLLOW, id };
};
export let unfollow = (id: number): unfollowType => {
  return { type: UNFOLLOW, id };
};
export let setUsers = (users: Array<usersType>): setUsersType => {
  return { type: SET_USERS, users };
};
export let setTotalCount = (count: number): setTotalCountType => {
  return { type: SET_TOTAL_COUNT, count };
};
export let setPage = (page: number): setPageType => {
  return { type: SET_PAGE, page };
};
export let setIsFetching = (isFetching: boolean): setIsFetchingType => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};
export let setIsFollowing = (
  isFetching: boolean,
  id: number
): setIsFollowingType => {
  return { type: TOOGLE_IS_FOLLOWING, isFetching, id };
};

export const getUsers = (page: number, count: number) => async (
  dispatch: any
) => {
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
export const Unfollow = (id: number) => async (dispatch: any) => {
  dispatch(setIsFollowing(true, id));
  try {
    const response = await userAPI.getUnfollow(id);
    if (response.data.resultCode === 0) {
      dispatch(unfollow(id));
    } else {
      dispatch(setError(response.data.messages));
      throw new Error('Something went wrong');
    }
    dispatch(setIsFollowing(false, id));
  } catch (error) {
    dispatch(setError(error.massage));
  }
};
export const Follow = (id: number) => async (dispatch: any) => {
  dispatch(setIsFollowing(true, id));
  try {
    const response = await userAPI.getFollow(id);
    debugger;
    if (response.data.resultCode === 0) {
      dispatch(follow(id));
    } else {
      // dispatch(setError(response.data.messages[0]));
      throw new Error(`Something went wrong : ${response.data.messages}`);
    }
    dispatch(setIsFollowing(false, id));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default usersReducer;
