import React from 'react';
import { useHistory } from 'react-router-dom';

const UserDetail = ({ location }) => {
	const history = useHistory();
	return (
		<div>
			<div className="mt-3">
				<h2 className="alert alert-primary text-center">
					<button 
						className="btn btn-primary float-left"
						onClick = {history.goBack}
					>
						Go back
					</button>
					User Details
				</h2>
			</div>
			<div className="alert alert-primary">
				<h3>
				Name: { location.state.user.email }
				</h3>
			</div>
			<div className="alert alert-primary">
				<h3>
					Role: { location.state.user.role }
				</h3>
			</div>
			<div className="alert alert-primary">
				<h3>
					Articles: { 
						(!location.state.user.articles || !location.state.user.articles.length) 
							? <span>None </span> 
							: location.state.user.articles 
					}
				</h3>
			</div>
		</div>
	);
};

export default UserDetail;