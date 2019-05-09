import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

const Homepage = () => (
	<div>
		<Container fluid />
	</div>
);

export default connect()(Homepage);
