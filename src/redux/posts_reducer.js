const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initial = {
  posts: [
    { id: 1, message: "post" },
    { id: 2, message: "post" },
    { id: 3, message: "post" },
    { id: 4, message: "post" },
    { id: 5, message: "post" }
  ],
  newPostText: ""
};

const postsReducer = (state = initial, action) => {
  let copyState;
  switch (action.type) {
    case ADD_POST:
      let NewPost = {
        id: 67,
        message: state.newPostText
      };
      copyState = {
        ...state,
        posts: [...state.posts, NewPost],
        newPostText: ""
      };
      return copyState;

    case UPDATE_NEW_POST_TEXT:
      copyState = { ...state, newPostText: action.newText };
      return copyState;
    default:
      return state;
  }
};

export let addPost = () => {
  return { type: ADD_POST };
};
export let updateNewPostText = text => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default postsReducer;
