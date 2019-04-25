import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createAFLStore from './store/index';
import routes from './routes/index';

const app = (
	<Provider store={createAFLStore()}>
		<Router>
			<Switch>
				{routes.map((route) => {
					return (
						<Route
							path={route.path}
							component={route.component}
							key={route.path}
						/>
					);
				})}
			</Switch>
		</Router>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
