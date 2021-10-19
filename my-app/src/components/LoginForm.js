import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "./styledComponents/styledButton";
import { Input } from "./styledComponents/styledInput";
import styled from "styled-components";

export default function LoginForm({ setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();

    const user = { email, password };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((response) => {
        localStorage.token = response.jwt;
        setUser(response.user);
        setLoggedIn(true);
      }, []);
  }

  return (
    <MainDiv>
      <Form onSubmit={handleLogin} className="login">
        <H2 htmlFor="username">Email</H2>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <H2 htmlFor="password">Password</H2>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="fill" color="primary" type="submit">
          Login
        </Button>
      </Form>
      <br />
      {loggedIn ? (<Redirect to='/profile' />) : ("Invalid username or password.")}
      
    </MainDiv>
  );
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