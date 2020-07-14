import { setAuth } from '../redux/login_reducer';

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';
const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';

type initialType = {
  isInitialized: boolean;
  errorMessage: string | undefined;
};

const initial: initialType = {
  isInitialized: false,
  errorMessage: undefined,
};

const usersReducer = (state = initial, action: any): initialType => {
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    case FETCH_TASKS_ERROR:
      return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
};

type isInitializedSuccessType = {
  type: typeof INITIALIZE_SUCCESS;
};

type setErrorType = {
  type: typeof FETCH_TASKS_ERROR;
  errorMessage: { errorMessage: any };
};

export const isInitializedSuccess = (): isInitializedSuccessType => {
  return { type: INITIALIZE_SUCCESS };
};
export const setError = (errorMessage: any): setErrorType => {
  return { type: FETCH_TASKS_ERROR, errorMessage };
};

export const initialApp = () => async (dispatch: any) => {
  try {
    const promise = dispatch(setAuth());
    Promise.all([promise]).then(() => {
      dispatch(isInitializedSuccess());
    });
  } catch (error) {
    console.error(error.message);
    dispatch(setError(error.message));
  }
};

export default usersReducer;
