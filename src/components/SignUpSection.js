import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import logoImg from "../img/avatar.jpg";
import { Card, Logo, Form, Input, Button, Title, Error } from '../components/StyledComps';
import { Context as AuthContext } from '../context/AuthContext';

const Signup = () => {
  const { state, signup, clearErr, tryAutoSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  let location = useLocation();
	
	let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    clearErr();
    tryAutoSignIn();
    if(localStorage.token) {
      history.replace(from);
    }
  },[]);

  return (
    <Card>
      <Title> Sign Up </Title>
      <Logo src={logoImg} />
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
        <Button onClick={() => signup({email, password})}>Sign Up</Button>
      </Form>
      <Link to="/signin">Already have an account?</Link>
      { state.errMessage &&<Error>{state.errMessage}</Error> }
    </Card>
  );
}

export default Signup;