import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AFLStores from './stores/index';
import routes from './routes/index';

window._____APP_STATE_____ = AFLStores;

const app = (
	<Provider {...AFLStores}>
		<Router>
			<Switch>
				{routes.map((route) => {
					return (
						<Route
							path={route.path}
							component={route.component}
							name={route.name}
							key={route.path}
						/>
					);
				})}
			</Switch>
		</Router>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
