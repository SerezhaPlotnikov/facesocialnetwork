import { setAuth } from '../redux/login_reducer';

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initial = {
  isInitialized: false,
};

const usersReducer = (state = initial, action) => {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

export let isInitializedSuccess = () => {
  return { type: INITIALIZE_SUCCESS };
};

export const initialApp = () => (dispatch) => {
  const promise = dispatch(setAuth());
  Promise.all([promise]).then(() => {
    dispatch(isInitializedSuccess());
  });
};

export default usersReducer;
