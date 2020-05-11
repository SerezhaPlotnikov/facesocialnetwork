import ProfileInfo from "./Info/ProfileInfo";
import { connect } from "react-redux";
import { getProfile } from "../../../../redux/profile_reducer";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../../../hoc/AuthHoc";

class ProfileInfoContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 7540;
    }
    this.props.getProfile(userId);
  }

  render() {
    return <ProfileInfo {...this.props} />;
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    isFetching: state.profile.isFetching,
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(follow(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsers(users));
//     },
//     setTotalCount: users => {
//       dispatch(setTotalCount(users));
//     },
//     setPage: page => {
//       dispatch(setPage(page));
//     },
//     setIsFetching: isFetching => {
//       dispatch(setIsFetching(isFetching));
//     }
//   };
// };
export default compose(
  connect(mapStateToProps, {
    getProfile
  }),
  withRouter,
  withAuthRedirect
)(ProfileInfoContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileInfoContainer);
// let WithProfileInfo = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {
//   getProfile
// })(WithProfileInfo);
