import React, { useState } from 'react';
import axios from '../api/reviewApi';
import './UploadStyle.css';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadSection = () => {
	const [ file,setFile ] = useState(null);
	const [ loaded,setLoaded ] = useState(0);
	
	let onChangeHandler = event => {
		if(maxSelectFile(event) && checkMimeType(event) && checkFileSize(event)){
			setFile(event.target.files);
		}
	}

	let onClickHandler = () => {
    const data = new FormData();
    for(let i = 0; i < file.length; i++) {
      data.append('file', file[i]);
    }
	  axios.post("/upload", data, { 
	  	onUploadProgress: ProgressEvent => {
        setLoaded(ProgressEvent.loaded / ProgressEvent.total*100);
      }
	  })
		.then(res => { 
    	toast.success('File uploaded successfully!');
		})
		.catch(err => { 
		  toast.error('Failed to upload file!');
		})
	}	

	let maxSelectFile = event => {
    let files = event.target.files;
	  if (files.length > 3) { 
	    const err = 'Only 3 files can be uploaded at a time!';
	    return resetInput(event, err);
    }
    return true;
	}

	let resetInput = (event, err) => {
		event.target.value = null;
    toast.error(err);
    return false; 
	}

	let checkMimeType = event => {
  	let files = event.target.files; 
 	 	let err = '';
	  const types = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
	  for(let i = 0; i < files.length; i++) {
	    if (types.every(type => files[i].type !== type)) {
	      err = 'File format not supported!';
	    }
	  };
	  if (err !== '') { 
	    return resetInput(event, err);
	  }
	  return true;
	}

	let checkFileSize = event => {
	  let files = event.target.files;
	  let size = 5e+6;								//5 mb max file size 
	  let err = ""; 
	  for (let i = 0; i < files.length; i++) {
	  	if (files[i].size > size) {
	    	err = 'File size is too large!';
	  	}
  	};
		if (err !== '') {
	  	return resetInput(event, err);
		}
		return true;
	}

	return (
		<div className="text-center">
			<h2>Upload a New File</h2>
			<div className="container d-flex justify-content-center">
				<div style={{width: '40%'}}>
		      <form method="post" action="#" id="#">
            <div className="form-group files">
              <input type="file" style={{cursor: 'pointer'}} accept=".pdf, .docx, .doc" name="file" multiple onChange={onChangeHandler}/>
            </div>
          </form>
          <ToastContainer />
          <Progress max="100" color="success" value={loaded} >{Math.round(loaded,2) }%</Progress>
					<button type="button" style={{marginTop: 10}} className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>
				</div>
			</div>
		</div>
	);
};

export default UploadSection;
