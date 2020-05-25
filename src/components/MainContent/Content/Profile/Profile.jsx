import ProfileInfo from './Info/ProfileInfo';
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
		userId = 7540;
	}
	useEffect(() => props.getProfile(userId), [userId]);
	useEffect(() => props.getStatus(userId), [userId]);

	return <ProfileInfo {...props} />;
};

let mapStateToProps = (state) => {
	return {
		profile: state.profile.profile,
		isFetching: state.profile.isFetching,
		status: state.profile.status,
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
