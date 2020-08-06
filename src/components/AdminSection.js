import React from "react";
import { Route, Switch } from 'react-router-dom';
import UsersSection from './UsersSection';
import UserDetail from './UserDetail';

const Admin = ({ match }) => {
  return (
    <div className="jumbotron border border-primary">
      <h1 className="alert alert-primary text-center">
      	Admin Section
    	</h1>
    	<Switch>
    		<Route path={`${match.url}/:id`} component={UserDetail}/>
    		<Route component={UsersSection} />
    	</Switch>
    </div>
  );
}

export default Admin;