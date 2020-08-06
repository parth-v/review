import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import UserDetail from './UserDetail';
import { Route, Redirect } from 'react-router-dom';

const ProfileSection = ({ match }) => {
	const { state } = useContext(AuthContext);
	const user = state.user;
	//console.log(state.user);
	return (
		<>
			<Redirect to={{pathname:`${match.url}/${state.user._id}`, state: { user } }} />
			<Route path={`${match.path}/${state.user._id}`} component={UserDetail} />
		</>	
	);
};

export default ProfileSection;