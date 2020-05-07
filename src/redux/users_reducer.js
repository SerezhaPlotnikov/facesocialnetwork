const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING = "TOOGLE_IS_FOLLOWING";

let initial = {
  users: [],
  count: 5,
  totalCount: 0,
  page: 1,
  isFetching: true,
  isFollowing: []
};
const usersReducer = (state = initial, action) => {
  let copyState;
  switch (action.type) {
    case FOLLOW:
      copyState = {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
      return copyState;
    case UNFOLLOW:
      copyState = {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
      return copyState;
    case SET_USERS:
      return { ...state, users: action.users };
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
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

export let follow = userId => {
  return { type: FOLLOW, userId };
};
export let unfollow = userId => {
  return { type: UNFOLLOW, userId };
};
export let setUsers = users => {
  return { type: SET_USERS, users };
};
export let setTotalCount = count => {
  return { type: SET_TOTAL_COUNT, count };
};
export let setPage = page => {
  return { type: SET_PAGE, page };
};
export let setIsFetching = isFetching => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};
export let setIsFollowing = (isFetching, userId) => {
  return { type: TOOGLE_IS_FOLLOWING, isFetching, userId };
};

export default usersReducer;
