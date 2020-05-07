import React from "react";
import {MessageContent, NewMess} from "./AddMessageStyled";

const AddMessage = props => {
  let NewMessage = props.dialogs.map(m => <NewMess>{m.message}</NewMess>);
  let AddMessageClick = () => {
    props.addMessage();
  };
  let OnMessageChange = e => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };
  return (
    <MessageContent>
      <div>
        <form>
          <input
            onChange={OnMessageChange}
            value={props.newMessageText}
            type="text"
            placeholder="New Message"
          />
          <input onClick={AddMessageClick} type="button" value="Add Post" />
        </form>
      </div>
      <div>{NewMessage}</div>
    </MessageContent>
  );
};

export default AddMessage;
