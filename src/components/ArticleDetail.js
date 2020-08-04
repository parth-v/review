import React from 'react';

const PaperSection = ({ match }) => {
	return (
		<div>
			<h1>Article Details of: {match.params.paperId}</h1>
		</div>
	);
};

export default PaperSection;