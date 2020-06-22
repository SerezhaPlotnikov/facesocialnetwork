import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import { GlobalStyles } from './AppStyled';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialApp } from './redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';
//Styled-component
import darkTheme from './components/common/dark';
import lightTheme from './components/common/light';
import { ThemeTest, MainTheme } from './components/common/MainTheme';
import { ThemeProvider } from 'styled-components';

const App = (props) => {
	const stored = localStorage.getItem('isDarkMode');
	const [isDarkMode, setIsDarkMode] = useState(
		stored === 'true' ? true : false,
	);
	useEffect(() => {
		props.initialApp();
	}, [props]);
	if (!props.initialized) {
		return <Preloader />;
	}
	return (
		<>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<GlobalStyles />
				<MainTheme>
					<ThemeTest
						onClick={() => {
							setIsDarkMode(!isDarkMode);
							localStorage.setItem('IsDarkMode', !isDarkMode);
						}}
					>
						Dark mode is {isDarkMode ? 'Enable' : ' Disable'}
					</ThemeTest>
				</MainTheme>
			</ThemeProvider>
			<Header />
			<MainContent />
		</>
	);
};

const mapStateToProps = (state) => ({
	initialized: state.app.isInitialized,
});
export default compose(connect(mapStateToProps, { initialApp }))(App);
