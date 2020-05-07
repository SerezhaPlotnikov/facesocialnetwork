import React from "react";
import {LogBox} from "./LoginStyled";

const Login = (props) => {
    return (
        <LogBox>
            {props.email}
        </LogBox>
    )
};
export default Login
