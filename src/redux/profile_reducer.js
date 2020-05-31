import { profileAPI } from '../api/api';

const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';

let initial = {
	profile: null,
	isFetching: true,
	status: '',
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

export const getProfile = (userId) => (dispatch) => {
	profileAPI.getUsersProfile(userId).then((response) => {
		dispatch(setIsFetching(false));
		dispatch(setUsersProfile(response.data));
	});
};
export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then((response) => {
		dispatch(setStatus(response.data));
	});
};
export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then((response) => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
};
export default profileReducer;
