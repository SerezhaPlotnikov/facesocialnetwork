//Redux
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
//Redux-form
import { reducer as formReducer } from 'redux-form'
//Reducers
import postsReducer from "./posts_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";
import profileReducer from "./profile_reducer";
import authReducer from "./login_reducer";

let reducers = combineReducers({
  news: postsReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;
