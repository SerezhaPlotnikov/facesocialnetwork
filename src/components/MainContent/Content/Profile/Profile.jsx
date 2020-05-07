import ProfileInfo from "./Info/ProfileInfo";
import {connect} from "react-redux";
import {setIsFetching, setUsersProfile} from "../../../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import React, {Component} from "react";
import * as axios from "axios";

class ProfileInfoContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7540;
        }
        axios
            .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        return <ProfileInfo {...this.props} />;
    }
}
let mapStateToProps = state => {
  return {
    profile: state.profile.profile,
      isFetching: state.profile.isFetching
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

let WithProfileInfo = withRouter(ProfileInfoContainer);
export default connect(mapStateToProps, {
    setUsersProfile,
    setIsFetching
})(WithProfileInfo);
