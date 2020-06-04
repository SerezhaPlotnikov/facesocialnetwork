import React from 'react';
import { connect } from 'react-redux';
import { LogoutAuth } from '../../../../redux/login_reducer';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { LogBox } from './LoginStyled';

const LogContainer = (props) => {
	if (!props.isAuth) {
		return <Link to='/login'>Login</Link>;
	}
	return (
		<LogBox>
			{props.email}
			<button
				onClick={() => {
					props.LogoutAuth();
				}}
			>
				Logout
			</button>
		</LogBox>
	);
};

let mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		isAuth: state.auth.isAuth,
	};
};
export default compose(connect(mapStateToProps, { LogoutAuth }))(LogContainer);
