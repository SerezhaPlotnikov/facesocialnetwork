import React from "react";
import {MapPost, NewsContent} from "./InputPostStyled";

const InputPost = props => {
  let AddMapPost = props.posts.map(m => (
    <MapPost key={m.id}>
      {m.id}
      {m.message}
    </MapPost>
  ));
  let NewPost = () => {
      props.addPost();
  };
  let onPostChange = e => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };
  return (
    <NewsContent>
      <div>
        <form>
          <input
            onChange={onPostChange}
            value={props.newPostText}
            type="text"
            placeholder="New Post"
          />
          <input onClick={NewPost} type="button" value="Add Post" />
        </form>
      </div>
      <div>{AddMapPost}</div>
    </NewsContent>
  );
};

export default InputPost;
