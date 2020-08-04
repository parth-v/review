import React, { Component } from "react";
import logo from "../../img/logo.svg";
import "./App.css";

import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {

    this.setState({ loading: true });

    fetch("http://localhost:8000/viewComments/aa")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
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
        <div className="row">
          <div className="col-4 pt-3 border-right">
            <h6>Say something about the article</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8 pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
