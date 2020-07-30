import React from 'react';
import fermat from '../img/fermat.jpg';

const HomeSection = () => {
	return (
		<div className="text-center">
			<h1 >Welcome to E-Fermat</h1>
			<img src={fermat} alt="fermat"/>
		</div>
	);
};

export default HomeSection;