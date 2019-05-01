import React from 'react';
import '../../assets/styles/commons/Footer.scss';
import AFL from '../../assets/images/AFL.svg';

const Footer = () => (
	<footer className="footer-container">
		<div className="left-footer">
			<div>
				<h3>CONTACT US FORM</h3>
			</div>
			<div className="email-form">
				<p>
					In case you do find the need to contact us, please provide
					your email and we shall revert as soon as possible.
				</p>
				<input placeholder="Email" aria-label="email-form" />
				<button type="submit">CONTACT US</button>
			</div>
			<div className="copyright">
				Copyright © 2019 | All Rights Reserved
			</div>
		</div>
		<div className="center-footer">
			<div>
				<button type="button">Standings</button>
			</div>
			<div>
				<button type="button">Player Rankings</button>
			</div>
			<div>
				<button type="button">Fixtures</button>
			</div>
			<div>
				<button type="button">Teams</button>
			</div>
			<div>
				<button type="button">Association</button>
			</div>
		</div>
		<div className="right-footer">
			<div>
				<img
					className="footer-logo"
					src={
						AFL ||
						'https://s3.us-east-2.amazonaws.com/afl1/AFL-02.svg'
					}
					alt="AFL logo"
				/>
			</div>
			<div className="bottom-right">
				<div>Bukoto Street, Kampala Uganda. Plot 103.</div>
				<div>aflinfo@andela.com</div>
				<div>+256 312 123 456</div>
			</div>
		</div>
	</footer>
);

export default Footer;
