import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logoImg from "../img/avatar.jpg";
import { Card, Logo, Form, Input, Button, Title } from "../components/StyledComps";
import { Context as AuthContext } from '../context/AuthContext';

const Login = (props) => {
  const { state, signin, clearErr, tryAutoSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  //console.log(from);

  useEffect(() => {
    clearErr();
    tryAutoSignIn();
    if(localStorage.token) {
      history.replace(from);
    }
  },[]);

  return (
    <Card>
      <Title> Sign In </Title>
      <Logo src={logoImg}/>
      <Form>
        <Input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <Button 
          onClick={ 
            async () => {
              await signin({email, password});
              if(localStorage.token) {
                history.replace(from);
              }
            }
          }
        >Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { 
          state.errMessage &&<p className="alert alert-danger">{state.errMessage}</p>
        }
    </Card>
  );
}

export default Login;