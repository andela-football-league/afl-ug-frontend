import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Home from '../containers/DefaultLayout';
import AFLStores from '../stores/index';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider {...AFLStores}>
			<Home />
		</Provider>,
		div,
	);
	ReactDOM.unmountComponentAtNode(div);
});
