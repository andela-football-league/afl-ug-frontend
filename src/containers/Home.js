import React from 'react';
import { connect } from 'react-redux';
import layout from '../assets/images/layout.svg';
import '../assets/styles/Home.css';

function Home() {
	return (
		<div className="Home">
			<header className="Home-header">
				<img src={layout} alt="logo" />
			</header>
		</div>
	);
}

export default connect()(Home);
