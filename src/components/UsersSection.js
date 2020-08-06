import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/reviewApi';

const UsersSection = ({match}) => {
	const [users, setUsers] = useState([]);
	console.log(match);
	useEffect(() => {
		axios.get("/users")
		.then(res => setUsers(res.data))
		.catch(err => console.log('Failed to fetch users!'));
	},[]);

	return (
		<div >
			<h2 className="alert alert-primary">List of Users</h2>
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
										<Link to={{pathname:`${match.url}/${user._id}`, state:{ user }}}>
											{user.name} 
										</Link>
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