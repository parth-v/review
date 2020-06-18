import React, { useState } from 'react';
import axios from 'axios';
import './UploadStyle.css';

const UploadSection = () => {
	const [ file,setFile ] = useState(null);
	let onChangeHandler = (event) => {
		setFile(event.target.files);
	}
	let onClickHandler = () => {
    const data = new FormData();
    for(let i = 0; i < file.length; i++) {
      data.append('file', file[i]);
    }
	  axios.post("http://localhost:8000/upload", data, { 
	  })
		.then(res => {
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
              <input type="file" style={{cursor: 'pointer'}} name="file" multiple onChange={onChangeHandler}/>
            </div>
          </form>
					<button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
				</div>
			</div>
		</div>
	);
};

export default UploadSection;
