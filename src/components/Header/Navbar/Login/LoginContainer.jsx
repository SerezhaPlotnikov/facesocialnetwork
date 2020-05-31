import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { LogoutAuth } from '../../../../redux/login_reducer';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { useEffect } from 'react';

const LogContainer = (props) => {
	if (!props.isAuth) {
		return <Link to='/login'>Login</Link>;
	}
	return <Login {...props} />;
};

let mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		isAuth: state.auth.isAuth,
	};
};
export default compose(connect(mapStateToProps, { LogoutAuth }))(LogContainer);
