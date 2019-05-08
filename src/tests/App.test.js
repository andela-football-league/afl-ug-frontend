import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from '../containers/DefaultLayout';
import createAFLStore from '../store/index';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={createAFLStore()}>
			<Home />
		</Provider>,
		div,
	);
	ReactDOM.unmountComponentAtNode(div);
});
