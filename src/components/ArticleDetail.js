import React from 'react';

const PaperSection = ({ match, location }) => {
	const { article } = location.state;
	return (
		<div className="card bg-light border-secondary">
			<h1 className="card-header">Article Details:</h1>
			<div className="card-body">
				<h2 className="card-header">Name</h2>
				<p>{article.name}</p>
				<h2 className="card-header">Abstract</h2>
				<p>{article.abstract}</p>
			</div>
		</div>
	);
};

export default PaperSection;