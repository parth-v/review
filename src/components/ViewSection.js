import React, { useState, useEffect } from 'react';
import axios from '../api/reviewApi';

const ViewSection = () => {
	const [papers, setPapers] = useState([]);
  // const [currentTutorial, setCurrentTutorial] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
  	axios.get("http://localhost:8000/view")
		.then(res => { 
    	setPapers(res.data);
		})
		.catch(err => { 
		  console.log('Failed to fetch file!');
		})
  }, []);
	return (
		<div>
			<h2 className="text-center">Your submitted Publications!</h2>
	    {
	    	<ul className="list-group">
		      {papers &&
		        papers.map((paper, index) => (
		          <li
		            className={
		              "list-group-item"
		            }
		            onClick={ () => {
		            	axios.get(`http://localhost:8000/download?name=${paper}`)
										.then(res => { 
											console.log('File Downloaded!');
										})
										.catch(err => { 
										  console.log('Failed to download file!');
										})
		            }}
		            key={index}
		          >
		            {paper.split('-').pop()}
		          </li>
		        ))}
		    </ul>
	 	  }
	  </div>
	);
};

export default ViewSection;