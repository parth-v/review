import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext'; 

const InitiateAuth = () => {
	const { tryAutoSignIn } = useContext(AuthContext);
	
	useEffect(() => {
		tryAutoSignIn();
	}, []);

	return null;
};

export default InitiateAuth;