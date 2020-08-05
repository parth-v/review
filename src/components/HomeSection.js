import React from 'react';
import fermat from '../img/fermat.jpg';
//import ArticleSection from './ArticleSection';

const HomeSection = () => {
	return (
		<div className="jumbotron border border-primary">
		<div className="text-center">
			<h1 style={{fontSize:'3.5vw'}} className=" alert alert-primary">Welcome to E-Fermat</h1>
			<img src={fermat} width="70%" alt="fermat"/>
		</div>
		
		{//<ArticleSection match={{path: "view"}} />
	}
		</div>
	);
};

export default HomeSection;