import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import logoImg from "../img/avatar.jpg";
import { Card, Logo, Form, Input, Button, Title } from '../components/StyledComps';
import { Context as AuthContext } from '../context/AuthContext';

const Signup = () => {
  const { state, signup, clearErr } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let history = useHistory();
  let location = useLocation();
	
	let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    clearErr();
    if(state.token) {
      history.replace(from);
    }
  },[]);

  return (
    <Card>
      <Title> Sign Up </Title>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="text"
          value={name}
          onChange= {e => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button 
        	onClick = { async() => {
           	await signup({email, password, name});
            if(localStorage.token) {
              history.replace(from);
            }
          }}
        >
        	Sign Up
        </Button>
      </Form>
      <Link to="/signin">Already have an account?</Link>
      { state.errMessage &&<p className="alert alert-danger">{state.errMessage}</p> }
    </Card>
  );
}

export default Signup;