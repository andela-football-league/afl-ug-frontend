import React from 'react';
import DefaultLayout from '../containers/DefaultLayout';
import Homepage from '../containers/Homepage';

const Home = (props) => (
	<DefaultLayout {...props}>
		<Homepage {...props} />
	</DefaultLayout>
);

export default Home;
