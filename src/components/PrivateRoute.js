import React from 'react';

const PrivateRoute = (props) => {
	const isAuthenticated = true;
	return (
		isAuthenticated ? (
			<div>Allowed</div>
		) : (
			<div>Not allowed</div>
		)
	);
};

export default PrivateRoute;