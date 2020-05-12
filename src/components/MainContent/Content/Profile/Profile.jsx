import ProfileInfo from "./Info/ProfileInfo";
import { connect } from "react-redux";
import {getProfile, getStatus} from "../../../../redux/profile_reducer";
import { withRouter } from "react-router-dom";
import React, {useEffect} from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../../../hoc/AuthHoc";

let ProfileInfoContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = 7540;
    }
    props.getProfile(userId);
    props.getStatus(userId);
  }, [props]);

  return <ProfileInfo {...props} />
};

// class ProfileInfoContainer extends Component {
//   componentDidMount() {
//     let userId = this.props.match.params.userId;
//     if (!userId) {
//       userId = 7540;
//     }
//     this.props.getProfile(userId);
//   }
//
//   render() {
//     return <ProfileInfo {...this.props} />;
//   }
// }

let mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    isFetching: state.profile.isFetching,
    status: state.profile.status
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
    getProfile,
    getStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileInfoContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileInfoContainer);
// let WithProfileInfo = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {
//   getProfile
// })(WithProfileInfo);
