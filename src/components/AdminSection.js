import React, { useContext } from "react";
import { Context as AuthContext } from '../context/AuthContext';
import { useHistory,Route, Switch } from 'react-router-dom';
import UsersSection from './UsersSection';
import UserDetail from './UserDetail';

const Admin = ({ match }) => {
  const { signout } = useContext(AuthContext);
  const history = useHistory();
  console.log(history);
  return (
    <div className="jumbotron border border-primary">
      <h1 className="alert alert-primary text-center">
      	Admin Section
      	<button className="btn btn-primary float-sm-right my-auto"
      		onClick={()=>{
      			signout();
      			history.go(0);
      		}}
      	>
      		Sign Out
      	</button>
    	</h1>
      
    	<Switch>
    		<Route path={`${match.url}/:id`} component={UserDetail}/>
    		<Route component={UsersSection} />
    	</Switch>
    </div>
  );
}

export default Admin;