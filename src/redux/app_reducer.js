import { setAuth } from '../redux/login_reducer';

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';
const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';

let initial = {
  isInitialized: false,
  errorMassages: undefined,
};

const usersReducer = (state = initial, action) => {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    case FETCH_TASKS_ERROR:
      return { ...state, errorMassages: action.errorMassages };
    default:
      return state;
  }
};

export let isInitializedSuccess = () => {
  return { type: INITIALIZE_SUCCESS };
};
export let setError = (errorMassages) => {
  return { type: FETCH_TASKS_ERROR, errorMassages };
};

export const initialApp = () => async (dispatch) => {
  try {
    const promise = dispatch(setAuth());
    Promise.all([promise]).then(() => {
      dispatch(isInitializedSuccess());
    });
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default usersReducer;
