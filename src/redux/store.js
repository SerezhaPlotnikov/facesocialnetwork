import postsReducer from "./posts_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
  _state: {
    news: {
      posts: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi2" },
        { id: 3, message: "Hi3" },
        { id: 4, message: "Hi4" },
        { id: 5, message: "Hi5" }
      ],
      newPostText: ""
    },
    dialogs: {
      dialogs: [
        { message: "NewText" },
        { message: "NewText1" },
        { message: "NewText2" },
        { message: "NewText3" }
      ],
      newMessageText: ""
    }
  },
  _rerenderEntireTree() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  sub(obs) {
    this._rerenderEntireTree = obs;
  },
  // updateNewPostText(newText) { //как вариант сделать это метод функции приватными(_function(){...}) и передать в dispatch {this.addPost()}{this.updateNewPostText(action.newText)}
  //   this._state.newPostText = newText;
  //   this._rerenderEntireTree(this._state);
  // },
  // addPost() {
  //   let NewPost = {
  //     id: 67,
  //     message: this._state.newPostText
  //   };
  //   this._state.posts.push(NewPost);
  //   this._state.newPostText = "";
  //   this._rerenderEntireTree(this._state);
  // },
  dispatch(action) {
    this._state.news = postsReducer(this._state.news, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._rerenderEntireTree(this._state);
  }
};

export default store;
