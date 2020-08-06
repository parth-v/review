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
			<table className="table table-success text-center">
				<thead>
				<th>Email</th> 
				<th>{ location.state.user.email }</th>
				</thead>
				<thead>
				<th> Name</th>
				<th>{ location.state.user.name }</th>
				</thead>
				<thead>
				<th>Role</th>
				<th>{ location.state.user.role }</th>
				</thead>
				<thead>
				<th>Articles</th>
				<th>
					{ 
						(!location.state.user.articles || !location.state.user.articles.length) 
							? <span>None </span> 
							: location.state.user.articles.length 
					}
				</th>
				</thead>
			</table>
		</div>
	);
};

export default UserDetail;