import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { setAuth } from "../../../../redux/login_reducer";
import { Link } from "react-router-dom";

const LogContainer = props => {
  useEffect(() => props.setAuth(), [props]);

  if (!props.isAuth) {
    return <Link to="/login">Login</Link>;
  }
  return <Login {...props} />;
};

let mapStateToProps = state => {
  return {
    email: state.auth.email,
    isAuth: state.auth.isAuth
  };
};
export default connect(mapStateToProps, { setAuth })(LogContainer);
