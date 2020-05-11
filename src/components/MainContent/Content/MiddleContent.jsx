import React from "react";
import Content from "./MiddleContentStyled";
import Profile from "./Profile/Profile";
import Message from "./Message/Message";
import News from "./News/News";
import {Route, Switch} from "react-router-dom";
import Users from "./Users/Users";
import LogContainer from "../../Header/Navbar/Login/LoginContainer";

const MiddleContent = props => {
  return (
      <Content>
        <Switch>
          <Route exact path="/">
            <News/>
          </Route>
          <Route path="/profile/:userId?">
            <Profile/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/message">
            <Message/>
          </Route>
          <Route path="/login">
            <LogContainer/>
          </Route>
        </Switch>
    </Content>
  );
};

export default MiddleContent;
