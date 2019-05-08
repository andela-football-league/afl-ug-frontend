import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/styles/commons/Header.scss';
import AFL from '../../assets/images/AFL.svg';

const Header = (props) => {
	const { loggedIn, pageTitle } = props;
	return (
		<header className="header-container">
			<div className="header-img">
				<div className="header-section">
					<div className="top-div">
						<button type="button" className="log">
							{loggedIn ? 'PROFILE' : 'LOG IN'}
						</button>
					</div>
					<div>
						<div className="bottom-headings">
							<button type="button">STANDINGS</button>
							<button type="button">TEAMS</button>
							<button type="button">STATISTICS</button>
						</div>
					</div>
				</div>
				<div className="header-logo">
					<img
						src={AFL || 'https://s3.us-east-2.amazonaws.com/afl1/AFL-02.svg'}
						alt="AFL logo"
					/>
				</div>
				<div className="header-section">
					<div className="top-div">
						<button type="button" className="reg">
							{loggedIn ? 'LOG OUT' : 'REGISTER'}
						</button>
					</div>
					<div>
						<div className="bottom-headings">
							<button type="button">FIXTURE</button>
							<button type="button">RESULTS</button>
							<button type="button">ASSOCIATION</button>
						</div>
					</div>
				</div>
			</div>
			<div>{pageTitle ? <h1 className="heading">{pageTitle}</h1> : ''}</div>
		</header>
	);
};

Header.defaultProps = {
	pageTitle: '',
	loggedIn: false,
};

Header.propTypes = {
	pageTitle: PropTypes.string,
	loggedIn: PropTypes.bool,
};

export default connect()(Header);
