import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context as AuthContext } from '../context/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
	const { state } = useContext(AuthContext);
	const isAuthenticated = state.token ? true : false;
	//console.log(state, isAuthenticated);
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