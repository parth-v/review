import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context as AuthContext } from '../context/AuthContext';
import NotAdmin from './NotAdmin';

const PrivateRoute = ({component: Component, ...rest}) => {
	const { state } = useContext(AuthContext);
	const isAuthenticated = state.token ? true : false;
	//console.log(state, isAuthenticated);
	console.log(rest);
	const isAdmin = (isAuthenticated && state.user.role === "admin") ? true : false;
	const isAdminPath = (rest.path === "/admin") ?	true: false; 

	return (
		<Route 
			{...rest}
			render={ props => {
				return ((isAuthenticated && !isAdminPath) || (isAdminPath && isAdmin)) ? (
					<Component {...props} /> 
				) : (
					(isAuthenticated && isAdminPath && !isAdmin) ? <NotAdmin /> :
					<Redirect to={{ pathname: "/signin", state: { from: props.location} }} />
				)
			}
			}
		/>
	);
};

export default PrivateRoute;