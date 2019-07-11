import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import '../../assets/styles/commons/Header.scss';
import AFL from '../../assets/images/AFL.svg';
import LoginForm from '../LoginForm';

inject('ModalStore');
@observer
class Header {
	render() {
		const { loggedIn, pageTitle } = this.props;
		const { status, openModal, closeModal } = this.props.ModalStore;
		return (
			<header className="header-container">
				<div className="header-img">
					<div className="header-section">
						<div className="top-div">
							{loggedIn ? (
								<button type="button" className="log">
									PROFILE
								</button>
							) : (
								<button type="button" className="log" onClick={openModal}>
									LOG IN
								</button>
							)}
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
				<LoginForm open={status} onClose={closeModal} />
			</header>
		);
	}
}

Header.defaultProps = {
	pageTitle: '',
	loggedIn: false,
};

Header.propTypes = {
	pageTitle: PropTypes.string,
	loggedIn: PropTypes.bool,
};

export default Header;
