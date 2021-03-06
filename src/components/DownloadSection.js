import React from 'react';

const DownloadSection = () => {
	return (
		<div>
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
			           style = {{cursor: 'pointer'}}
			            onClick={ () => {
			            	axios.get('/view?')

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
			            key = {paper._id}
			          >
			          {console.log(`${match.url}view/${paper._id}`)}
			            <Link to={`${match.url}${paper._id}`}>
				            {paper.name.split('-').pop()}
				          </Link>
			          </li>
			        ))}
			    </ul>
			    )
		 	  }
		  </div>
		  <Route path={`${match.path}:productId`} component={DownloadSection}/>
		</div>
	);
};

export default DownloadSection;