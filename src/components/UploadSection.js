import React, { useState } from 'react';
import axios from 'axios';
import './UploadStyle.css';

const UploadSection = () => {
	const [ file,setFile ] = useState(null);
	let onChangeHandler = (event) => {
		setFile(event.target.files[0]);
	}
	let onClickHandler = () => {
    const data = new FormData();
    data.append('file', file);
		axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
	  })
	  .then(res => { // then print response status
	    console.log(res.statusText);
	  });
	}	
	

	return (
		<div>
			<h2>Upload a new File</h2>
			<div className="container d-flex justify-content-center">
				<div style={{width: '40%'}}>
		      <form method="post" action="#" id="#">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input type="file" name="file" onChange={(event) => onChangeHandler(event)}/>
            </div>
          </form>
					<button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
				</div>
			</div>
		</div>
	);
};

export default UploadSection;
