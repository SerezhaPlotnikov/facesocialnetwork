import React from "react";
import { LogBox } from "./LoginStyled";

const LoginHeader = props => {
    const LogoutFunc = () => {
        props.LogoutAuth()
    };
  return (
    <LogBox>
      {props.email}
      <button onClick={LogoutFunc}>Logout</button>
    </LogBox>
  );
};
export default LoginHeader;
