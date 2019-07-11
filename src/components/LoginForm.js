import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Image, Input, Modal } from 'semantic-ui-react';

class LoginForm extends Component {
	state = {};

	render() {
		const { open, onClose } = this.props;
		return (
			<div>
				<Modal open={open} onClose={onClose}>
					<Modal.Header>Login</Modal.Header>
					<Modal.Content image>
						<Image
							wrapped
							size="medium"
							src="https://afl1.s3.us-east-2.amazonaws.com/Login-Backscreen.png"
						/>
						<Modal.Description>
							<Input iconPosition="left" placeholder="Email">
								<Icon name="at" />
								<input />
							</Input>
							<Input iconPosition="left" placeholder="Password" type="password">
								<Icon name="at" />
								<input />
							</Input>
						</Modal.Description>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

LoginForm.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default LoginForm;
