import React from 'react';

const DisplayLabel = ({ children }) => {
	return (
		<label className="ml-2 alert alert-primary">
			<h3>
				{children}
			</h3>
		</label>
	);
};

export default DisplayLabel;