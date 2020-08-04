import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from '../api/reviewApi';
import { Spinner } from 'reactstrap';
import ArticleDetail from './ArticleDetail';

const ViewSection = (props) => {

	const { match } = props;
	
	const [papers, setPapers] = useState([]);

  useEffect(() => {
  	axios.get("/view")
		.then(res => { 
    	setPapers(res.data);
		})
		.catch(err => { 
		  console.log('Failed to fetch file!');
		})
  }, []);

	return (
		<div>
			<h2 className="text-center mt-5" style={{fontSize:'3.5vw'}}>List of articles!</h2>
	    { !papers.length ? 
	    	(
	    		<div className="text-center">
	    			<Spinner color="primary" style={{ marginTop:'1rem', width: '3rem', height: '3rem' }} type="grow" />
	    		</div>
	    	) :
	    	(
	    	<ul className="list-group">
		      {
		        papers.map((paper) => (
		          <li
		            className={
		              "list-group-item list-group-item-info"
		            }
		            key = {paper._id}
		          >
		            <Link to={`${match.url}/${paper._id}`}>
			            {paper.name.split('-').pop()}
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

