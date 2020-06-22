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
	const [darkMode, setDarkMode] = useState(initialThemeMode());
	useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(darkMode));
	}, [darkMode]);
	function initialThemeMode() {
		const localTheme = JSON.parse(localStorage.getItem('darkMode'));
		return localTheme || false;
	}

	useEffect(() => {
		props.initialApp();
	}, [props]);
	if (!props.initialized) {
		return <Preloader />;
	}
	return (
		<>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<GlobalStyles />
				<MainTheme>
					<ThemeTest
						onClick={() => {
							setDarkMode(!darkMode);
							localStorage.setItem('darkMode', !darkMode);
						}}
					>
						Dark mode is {darkMode ? 'Enable' : ' Disable'}
					</ThemeTest>
					<Header />
					<MainContent />
				</MainTheme>
			</ThemeProvider>
		</>
	);
};

const mapStateToProps = (state) => ({
	initialized: state.app.isInitialized,
});
export default compose(connect(mapStateToProps, { initialApp }))(App);
