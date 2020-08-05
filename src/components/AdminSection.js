import React, { useContext } from "react";
import { Button } from "../components/StyledComps";
import { Context as AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import UsersSection from './UsersSection';

function Admin(props) {
  const { signout } = useContext(AuthContext);
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1>Admin Section</h1>
      <div className="w-25">
      	<Button 
      		onClick={()=>{
      			signout();
      			history.go(0);
      		}}
      	>
      		Sign Out
      	</Button>
    	</div>
    	<UsersSection />
    </div>
  );
}

export default Admin;