import React, {Component} from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {serUserData} from "../../../../redux/login_reducer";
import * as axios from "axios"

class LogContainer extends Component {
  componentDidMount() {
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
        })
        .then(response => {
          if (response.data.resultCode === 0) {
            let {userId, email, login} = response.data.data;
            this.props.serUserData(userId, email, login)
          }
        });
  }

  render() {
    return <Login {...this.props} />;
  }
}

let mapStateToProps = state => {
  return {
    email: state.auth.email,
    isAuth: state.auth.isAuth
  };
};
export default connect(mapStateToProps, {serUserData})(LogContainer);
