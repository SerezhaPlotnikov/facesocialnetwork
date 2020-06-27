const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initial = {
  dialogs: [
    { message: 'dialog' },
    { message: 'dialog' },
    { message: 'dialog' },
    { message: 'dialog' },
  ],
  newMessageText: '',
};
const dialogsReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        dialogs: [...state.dialogs, { message: state.newMessageText }],
        newMessageText: '',
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessage };
    default:
      return state;
  }
};

export let addMessage = (message) => {
  return { type: ADD_MESSAGE, message };
};
export let updateNewMessageText = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text };
};

// export let MessageThunk = (formData) => dispatch => {
//   MessegAPI.addMessage(formData).then(response => {
//     if (response.data.resultCode === 0) {
//       dispatch(addMessage());
// };
//
export default dialogsReducer;
