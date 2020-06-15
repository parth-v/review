import React from 'react';
import './UploadStyle.css';

const UploadSection = () => {
	return (
		<div>
			<h2>Upload a new File</h2>
			<div class="container">
				<div>
		      <form method="post" action="#" id="#">
            <div class="form-group files">
              <label>Upload Your File </label>
              <input type="file" class="form-control" multiple="" />
            </div>
          </form>
				</div>
			</div>
		</div>
	);
};

export default UploadSection;
