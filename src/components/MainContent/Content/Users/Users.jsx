import React, { Component } from 'react';
import Info from './Info/Info';
import { connect } from 'react-redux';
import {
	Follow,
	getUsers,
	setTotalCount,
	Unfollow,
} from '../../../../redux/users_reducer';
import { withAuthRedirect } from '../../../../hoc/AuthHoc';
import { compose } from 'redux';

class InfoContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.page, this.props.count);
	}
	render() {
		return <Info {...this.props} />;
	}
}
// const InfoContainer = (props) => {
// 	useEffect(() => {
// 		props.getUsers(props.page, props.count);
// 	}, []);
// 	return <Info {...props} />;
// };

let mapStateToProps = (state) => ({
	users: state.users.users,
	count: state.users.count,
	totalCount: state.users.totalCount,
	page: state.users.page,
	isFetching: state.users.isFetching,
	isFollowing: state.users.isFollowing,
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, {
		Follow,
		Unfollow,
		setTotalCount,
		getUsers,
	}),
	withAuthRedirect,
)(InfoContainer);
