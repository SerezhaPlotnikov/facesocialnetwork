import React from 'react';
import Content from './MiddleContentStyled';
import Profile from './Profile/Profile';
import MessageContainer from './Message/AddMessage';
import News from './News/News';
import { Route, Switch } from 'react-router-dom';
import Users from './Users/Users';
import Login from './LoginForm/LoginForm';

const MiddleContent = () => {
  return (
    <Content>
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route path="/profile/:userId?">
          <Profile />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/message">
          <MessageContainer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Content>
  );
};

export default MiddleContent;
