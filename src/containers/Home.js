import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/commons/Header';
import '../assets/styles/Home.css';

function Home() {
	return (
		<div className="Home">
			<Header pageTitle="HOME" />
		</div>
	);
}

export default connect()(Home);
