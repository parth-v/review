import React, { useState } from 'react';
import axios from 'axios';
import './UploadStyle.css';

const UploadSection = () => {
	const [ file,setFile ] = useState(null);
	
	let onChangeHandler = event => {
		if(maxSelectFile(event) && checkMimeType(event)) {
			setFile(event.target.files);
		}
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

	let maxSelectFile = event => {
    let files = event.target.files;
	  if (files.length > 3) { 
	    const msg = 'Only 3 files can be uploaded at a time!';
	    event.target.value = null;
	    console.log(msg);
	    return false;
    }
    return true;
	}

	let checkMimeType = event => {
  	let files = event.target.files; 
 	 	let err = '';
	  const types = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
	  for(let i = 0; i < files.length; i++) {
	    if (types.every(type => files[i].type !== type)) {
	      err = 'File format not supported!\n';
	    }
	  };
	  if (err !== '') { 
	    event.target.value = null;
	    console.log(err);
	    return false; 
	  }
	  return true;
	}

	return (
		<div>
			<h2>Upload a new File</h2>
			<div className="container d-flex justify-content-center">
				<div style={{width: '40%'}}>
		      <form method="post" action="#" id="#">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input type="file" style={{cursor: 'pointer'}} accept=".pdf, .docx, .doc" name="file" multiple onChange={onChangeHandler}/>
            </div>
          </form>
					<button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
				</div>
			</div>
		</div>
	);
};

export default UploadSection;
