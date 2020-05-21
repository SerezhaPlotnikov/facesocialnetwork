import Info from "./Info/Info";
import { connect } from "react-redux";
import {
  Follow,
  getUsers,
  setTotalCount,
  Unfollow
} from "../../../../redux/users_reducer";
import { withAuthRedirect } from "../../../../hoc/AuthHoc";
import { compose } from "redux";

let mapStateToProps = state => ({
  users: state.users.users,
  count: state.users.count,
  totalCount: state.users.totalCount,
  page: state.users.page,
  isFetching: state.users.isFetching,
  isFollowing: state.users.isFollowing,
  isAuth: state.auth.isAuth
});

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
    Follow,
    Unfollow,
    setTotalCount,
    getUsers
  }),
  withAuthRedirect
)(Info);

// let AuthRedirectComponent = withAuthRedirect(Info);
// const Users = connect(mapStateToProps, {
//   Follow,
//   Unfollow,
//   setTotalCount,
//   getUsers
// })(AuthRedirectComponent);
//
// export default Users;
