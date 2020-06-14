import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import { GlobalStyles } from './AppStyled';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialApp } from './redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';

const App = (props) => {
	useEffect(() => {
		props.initialApp();
	}, [props]);
	if (!props.initialized) {
		return <Preloader />;
	}
	return (
		<>
			<GlobalStyles />
			<Header />
			<MainContent />
		</>
	);
};

const mapStateToProps = (state) => ({
	initialized: state.app.isInitialized,
});
export default compose(connect(mapStateToProps, { initialApp }))(App);
