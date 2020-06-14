import darkTheme from './dark';
import lightTheme from './light';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bar, {
	Input,
	LeftBarStyle,
	Logo,
	Navtop,
	ThemeTest,
} from './NavBarStyled';
import { ReactComponent as LogoImg } from '../../../assets/lgfb.svg';
import LoginContainer from './Login/LoginContainer';
import { ThemeProvider } from 'styled-components';

const Navbar = () => {
	const stored = localStorage.getItem('isDarkMode');
	const [isDarkMode, setIsDarkMode] = useState(
		stored === 'true' ? true : false,
	);
	return (
		<Navtop>
			<LeftBarStyle>
				<Logo>
					<Link to='/'>
						<LogoImg style={{ backgroundColor: 'white' }} />
					</Link>
				</Logo>
				<Input>
					<form action={`/search/top/`} method={'get'}>
						<input placeholder={'Search'}></input>
					</form>
				</Input>
			</LeftBarStyle>
			<Bar>
				<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
					<ThemeTest
						onClick={() => {
							setIsDarkMode(!isDarkMode);
							localStorage.setItem('IsDatkMode', !isDarkMode);
						}}
					>
						Dark mode is {isDarkMode ? 'Enable' : ' Disable'}
					</ThemeTest>
				</ThemeProvider>
				<Link to='/'>News</Link>
				<Link to='/profile'>Profile</Link>
				<Link to='/users'>Users</Link>
				<Link to='/message'>Message</Link>
			</Bar>
			<Bar>
				{/*<example> */}
				<LoginContainer />
			</Bar>
		</Navtop>
	);
};

export default Navbar;
