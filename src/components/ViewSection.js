import React, { useState, useEffect } from 'react';
import axios from '../api/reviewApi';

const ViewSection = () => {
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
			<h2 className="text-center">Your submitted Publications!</h2>
	    {
	    	<ul className="list-group">
		      {papers &&
		        papers.map((paper, index) => (
		          <li
		            className={
		              "list-group-item"
		            }
		            style = {{cursor: 'pointer'}}
		            onClick={ () => {
		            	axios.get(`/download?name=${paper}`)
										.then(res => { 
											const url = window.URL.createObjectURL(new Blob([res.data]));
										  const link = document.createElement('a');
										  link.href = url;
										  link.setAttribute('download', paper.split('-').pop());
										  document.body.appendChild(link);
										  link.click();
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