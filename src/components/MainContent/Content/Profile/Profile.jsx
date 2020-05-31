import Profile from './Info/ProfileInfo';
import { connect } from 'react-redux';
import {
	getProfile,
	getStatus,
	updateStatus,
} from '../../../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/AuthHoc';

let ProfileInfoContainer = (props) => {
	let userId = props.match.params.userId;
	if (!userId) {
		userId = props.id;
	}
	useEffect(() => props.getProfile(userId), [userId]);
	useEffect(() => props.getStatus(userId), [userId]);

	return <Profile {...props} isOwner={props.match.params.userId} />;
};

let mapStateToProps = (state) => {
	return {
		profile: state.profile.profile,
		isFetching: state.profile.isFetching,
		status: state.profile.status,
		id: state.auth.id,
	};
};

export default compose(
	connect(mapStateToProps, {
		getProfile,
		getStatus,
		updateStatus,
	}),
	withRouter,
	withAuthRedirect,
)(ProfileInfoContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileInfoContainer);
// let WithProfileInfo = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {
//   getProfile
// })(WithProfileInfo);
