import React, { useState, useEffect } from 'react';
import axios from '../api/reviewApi';
import fermat from '../img/fermat.jpg';
import { Spinner } from 'reactstrap';

const HomeSection = () => {
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
		<>
		<div className="text-center">
			<h1 style={{fontSize:'3vw'}} >Welcome to E-Fermat</h1>
			<img src={fermat} width="70%" alt="fermat"/>
		</div>
		<div>
			<div>
				<h2 className="text-center mt-5">List of articles!</h2>
		    { !papers.length ? 
		    	(
		    		<div className="text-center">
		    			<Spinner color="primary" style={{ marginTop:'1rem', width: '3rem', height: '3rem' }} type="grow" />
		    		</div>
		    	) :
		    	(
		    	<ul className="list-group border ">
			      {papers &&
			        papers.map((paper, index) => (
			          <li
			            className={
			              "list-group-item list-group-item-info"
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
			    )
		 	  }
		  </div>
		</div>
		</>
	);
};

export default HomeSection;