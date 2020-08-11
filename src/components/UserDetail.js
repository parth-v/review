import React from 'react';
import { useHistory } from 'react-router-dom';

const UserDetail = ({ location }) => {
	const history = useHistory();
	return (
		<div>
			<div className="mt-3">	
				<h2 className="alert alert-primary d-flex flex-column">
					<button 
						className="btn btn-primary align-self-start"
						onClick = { history.goBack}
					>
						Go back
					</button>
					<div className="align-self-center">
						User Details
					</div>	
				</h2>
			</div>
			<table className="table table-success text-center">
				<thead>
				<tr>
				<th>Email</th> 
				<th>{ location.state.user.email }</th>
				</tr>
				</thead>
				<thead>
				<tr>
				<th> Name</th>
				<th>{ location.state.user.name }</th>
				</tr>
				</thead>
				<thead><tr>
				<th>Role</th>
				<th>{ location.state.user.role }</th>
				</tr></thead>
				<thead><tr>
				<th>Articles</th>
				<th>
					{ 
						(!location.state.user.articles || !location.state.user.articles.length) 
							? <span>None </span> 
							: location.state.user.articles.length 
					}
				</th></tr>
				</thead>
			</table>
		</div>
	);
};

export default UserDetail;