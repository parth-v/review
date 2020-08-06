import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
	const isAuthenticated = localStorage.token ? true : false;
	console.log(localStorage.token, isAuthenticated);
	return (
		<Route 
			{...rest}
			render={ props => 
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: "/signin", state: { from: props.location} }} />
				)
			}
		/>
	);
};

export default PrivateRoute;