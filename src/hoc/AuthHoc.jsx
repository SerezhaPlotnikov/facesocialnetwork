import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Comp) => {
	class RedirectComponent extends Component {
		render() {
			if (!this.props.isAuth) {
				return <Redirect to='/login' />;
			}
			return <Comp {...this.props} />;
		}
	}
	let AuthRedirectConnect = connect(mapStateToPropsForRedirect)(
		RedirectComponent,
	);
	return AuthRedirectConnect;
};
