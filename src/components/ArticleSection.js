import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/reviewApi';
import { Spinner } from 'reactstrap';

const ViewSection = (props) => {

	const { match } = props;
	
	const [articles, setArticles] = useState([]);

  useEffect(() => {
  	axios.get("/articles")
		.then(res => { 
    	setArticles(res.data);
		})
		.catch(err => { 
		  console.log('Failed to fetch file!');
		})
  }, []);

	return (
		<div className="jumbotron border border-primary">
			<h2 className="text-center alert alert-primary">List of articles!</h2>
	    { !articles.length ? 
	    	(
	    		<div className="text-center">
	    			<Spinner color="primary" style={{ marginTop:'1rem', width: '3rem', height: '3rem' }} type="grow" />
	    		</div>
	    	) :
	    	(
	    	<ul className="list-group">
		      {
		        articles.map((article) => (
		          <li
		            className={
		              "list-group-item list-group-item-info"
		            }
		            key = {article._id}
		          >
		            <Link to={{pathname:`${match.url}/${article._id}`,state:{ article }}}>
			            {article.name}
			          </Link>
		          </li>
		        ))}
		    </ul>
		    )
	 	  }
	  </div>
	);
};

export default ViewSection;

