import React from 'react';
import { useHistory } from 'react-router-dom';

const UserDetail = () => {
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
					<span>User Details</span>
				</h2>
			</div>
		</div>
	);
};

export default UserDetail;