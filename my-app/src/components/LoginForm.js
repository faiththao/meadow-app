import React, { useState } from 'react';
import { Button } from './styledComponents/styledButton';
import { Input } from './styledComponents/styledInput';
import styled from 'styled-components';
import { url } from "../App"

export default function LoginForm({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();

    const user = { email, password };

    fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        localStorage.token = response.jwt;
        setCurrentUser(response.user);
        // console.log(response.user)
      });
  }

  return (
    <MainDiv>
      <Form onSubmit={handleLogin}>
        <H2>Email</H2>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <H2>Password</H2>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </MainDiv>
  )
}

const Form = styled.form`
  display: inline-block;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 64vh;
  width: 80vw;
  margin-left: auto;
  background: #A8763E;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ECF0F1;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-family: 'Andada Pro', serif;
`;

const MainDiv = styled.div`
text-align: center;
`;

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #ECF0F1;
  font-family: 'Andada Pro', serif;
`;