import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import '../assets/styles/Default.scss';

const DefaultLayout = (props) => {
	const { children, pageTitle } = props;
	return (
		<div className="default-container">
			<Header pageTitle={pageTitle} />
			<div className="main">{children}</div>
			<Footer />
		</div>
	);
};

DefaultLayout.defaultProps = {
	pageTitle: '',
};

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
	pageTitle: PropTypes.string,
};

export default DefaultLayout;
