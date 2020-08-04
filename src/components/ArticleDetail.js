import React from 'react';
import axios from '../api/reviewApi';

const PaperSection = ({ location }) => {
	//console.log(location);
	const { article } = location.state;
	return (
		<div className="card bg-light border-primary">
			<h1 className="card-header">Article Details:</h1>
			<div className="card-body">
				<button 
					onClick={ () => {
						axios.get(`/download/${article.location}`)
							.then(res => { 
								const url = window.URL.createObjectURL(new Blob([res.data]));
							  const link = document.createElement('a');
							  link.href = url;
							  link.setAttribute('download', article.name);
							  document.body.appendChild(link);
							  link.click();
								console.log('File Downloaded!');
							})
							.catch(err => { 
							  console.log('Failed to download file!');
							})
						}
					} 
					className="btn btn-primary"
				>
					Download
				</button>
				<h2 className="card-header mt-2">Name</h2>
				<p>{article.name}</p>
				<h2 className="card-header mt-2">Abstract</h2>
				<p>{article.abstract}</p>
			</div>
		</div>
	);
};

export default PaperSection;