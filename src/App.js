import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UploadSection from './components/UploadSection';
import ViewSection from './components/ViewSection';
import HomeSection from './components/HomeSection';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Reviewer
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/upload"} className="nav-link">
                Upload
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/view"} className="nav-link">
                View
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={HomeSection} />
            <Route path="/upload" component={UploadSection} />
            <Route path="/view" component={ViewSection} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
