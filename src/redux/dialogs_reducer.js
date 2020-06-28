import { reset } from 'redux-form';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initial = {
  dialogs: [
    { message: 'dialog' },
    { message: 'dialog' },
    { message: 'dialog' },
    { message: 'dialog' },
  ],
};
const dialogsReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogs: [...state.dialogs, { message: action.message }],
      };
    default:
      return state;
  }
};

export const addMessage = (message) => {
  return { type: ADD_MESSAGE, message };
};
export const addMessageThunk = (message) => (dispatch) => {
  dispatch(addMessage(message));
  dispatch(reset('message'));
};
export default dialogsReducer;
