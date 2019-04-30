import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/Defaults.scss';
import AFL from '../../assets/images/AFL.svg';

const Header = ({ loggedIn, pageTitle }) => (
	<div className="header-container">
		<div className="header-img">
			<div className="header-section">
				<div className="top-div">
					{loggedIn ? (
						<h1 className="log">PROFILE</h1>
					) : (
						<h1 className="log">LOGIN</h1>
					)}
				</div>
				<div>
					<div className="bottom-headings">
						<h1>STANDINGS</h1>
						<h1>TEAMS</h1>
						<h1>STATISTICS</h1>
					</div>
				</div>
			</div>
			<div className="header-logo">
				<img
					src={
						AFL ||
						'https://s3.us-east-2.amazonaws.com/afl1/AFL-02.svg'
					}
					alt="AFL logo"
				/>
			</div>
			<div className="header-section">
				<div className="top-div">
					{loggedIn ? (
						<h1 className="reg">LOG OUT</h1>
					) : (
						<h1 className="reg">REGISTER</h1>
					)}
				</div>
				<div>
					<div className="bottom-headings">
						<h1>FIXTURE</h1>
						<h1>RESULTS</h1>
						<h1>ASSOCIATION</h1>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h1 className="heading">{pageTitle}</h1>
		</div>
	</div>
);

Header.defaultProps = {
	pageTitle: '',
	loggedIn: false,
};

Header.propTypes = {
	pageTitle: PropTypes.string,
	loggedIn: PropTypes.bool,
};

export default Header;
