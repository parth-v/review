import React, { useState, useEffect } from 'react';
import logo from "../img/logo.svg";
import axios from '../api/reviewApi';
import CommentList from "./comments/CommentList";
import CommentForm from "./comments/CommentForm";
import './ArticleDetail.css';

const PaperSection = ({ location }) => {
	//console.log(location);
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(false);
	const { article } = location.state;

	useEffect( () => {
    setLoading(true);
    axios.get(`comments/${article._id}`)
      .then(res => {
      	setComments(res.data);
      	setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const addComment = (comment) => {
    setLoading(false);
    setComments([comment, ...comments]);
  }

	const loadingSpin = loading ? "App-logo Spin" : "App-logo";
	return (
		<div>
			<div className="jumbotron border border-primary">
				<h1 className="alert alert-primary">Article Details:</h1>
				<div className="card-body">
					<button 
						onClick={ () => {
							axios.get(`/download/${article.location}`)
								.then(res => { 
									const url = window.URL.createObjectURL(new Blob([res.data]));
								  const link = document.createElement('a');
								  link.href = url;
								  link.setAttribute('download', article.name);
								  document.body.appendChild(link);
								  link.click();
									console.log('File Downloaded!');
								})
								.catch(err => { 
								  console.log('Failed to download file!');
								})
							}
						} 
						className="btn btn-primary"
					>
						Download
					</button>
					<h3 className="alert alert-primary mt-3">Name</h3>
					<p>{article.name}</p>
					<h3 className="alert alert-primary mt-3">Status</h3>
					<p className="btn btn-dark disabled">{article.status}</p>
					<h3 className="alert alert-primary mt-3">Author Email</h3>
					<p>{article.authorEmail}</p>
					<h3 className="alert alert-primary mt-3">Abstract</h3>
					<p>{article.abstract}</p>
				</div>
			</div>
			
      <div className="App container bg-light border border-primary rounded shadow">
        <header className="App-header">
          <img src={logo} className={loadingSpin} alt="logo" />
          <h1 className="App-title">
            Comments
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
        </header>
        <div className="container border border-primary rounded my-2">
	        <div className="row">
	          <div className="col-sm-4 pt-3 border-right border-primary">
	            <h6>Say something about the article</h6>
	            <CommentForm addComment={addComment} />
	          </div>
	          <div className="col-sm-8 pt-3 bg-white">
	            <CommentList
	              loading={loading}
	              comments={comments}
	            />
	          </div>
	        </div>
      	</div>
      </div>
		</div>
	);
};

export default PaperSection;