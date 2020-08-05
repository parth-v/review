import React from 'react';
import {Link} from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <li className="navbar-brand">
        <Link to={"/"} className="navbar-brand">
          E-Fermat
        </Link>
      </li>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to={"/upload"} className="nav-link">
              Upload
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/articles"} className="nav-link">
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signin"} className="nav-link">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;