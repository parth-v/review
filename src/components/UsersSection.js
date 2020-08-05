import React, { useEffect, useState} from 'react';
import axios from '../api/reviewApi';

const UsersSection = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		axios.get("/users")
		.then(res => setUsers(res.data))
		.catch(err => console.log('Failed to fetch users!'));
	},[]);

	return (
		<div>
			<h1>List of Users</h1>
			{
				!users.length 
					? (<div>Loading</div>)
					: (
						<ul className="list-group">
							{
								users.map(user => (
									<li 
										className="list-group-item list-group-item-info" 
										key = {user._id}
									>
										{user.role}: {user.email} 
									</li>

								))
							}	
						</ul>
					)
			}
		</div>
	);
};

export default UsersSection;