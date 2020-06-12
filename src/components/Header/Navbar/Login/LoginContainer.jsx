import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { LogoutAuth } from '../../../../redux/login_reducer';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { LogBox } from './LoginStyled';

const LogContainer = (props) => {
	const email = useMemo(() => {
		return <LogBox>{props.email}</LogBox>;
	}, [props.email]);
	if (!props.isAuth) {
		return <Link to='/login'>Login</Link>;
	}
	return (
		<LogBox>
			{email}
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
