import Info from "./Info/Info";
import {connect} from "react-redux";
import {
  follow,
  setIsFetching,
  setIsFollowing,
  setPage,
  setTotalCount,
  setUsers,
  unfollow
} from "../../../../redux/users_reducer";

let mapStateToProps = state => {
  return {
    users: state.users.users,
    count: state.users.count,
    totalCount: state.users.totalCount,
    page: state.users.page,
    isFetching: state.users.isFetching,
    isFollowing: state.users.isFollowing
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


const Users = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalCount,
  setPage,
  setIsFetching,
  setIsFollowing
})(Info);

export default Users;
