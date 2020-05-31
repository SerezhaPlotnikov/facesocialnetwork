import React from 'react';
import { LogBox } from './LoginStyled';

const LoginHeader = (props) => {
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
export default LoginHeader;
