import React, { useState } from "react";
import { Button } from "./styledComponents/styledButton";
import { Input } from "./styledComponents/styledInput";
import styled from "styled-components";
import { url } from "../App";

export default function LoginForm({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const production = "https://boiling-waters-59018.herokuapp.com";
  const development = "http://localhost:3000";
  const url = process.env.NODE_ENV === "production" ? production : development;

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();

    const user = { email, password };

    fetch(`${url}/login`, {
      // fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          localStorage.token = resp.jwt;
          setCurrentUser(resp.user);
        });
      } else {
        console.log("wrong email or password");
        res.json().then((resp) => {
          setError(resp.message);
        });
      }
    });
  }
  // .then((r) => r.json())
  //       .then((response) => {
  //         localStorage.setItem("jwt", response.jwt)
  //         setCurrentUser(response.user);
  //         console.log(response.user)
  //       });
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
      <h4 className="login-error">{error}</h4>
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
  background: #a8763e;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ecf0f1;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-family: "Andada Pro", serif;
`;

const MainDiv = styled.div`
  text-align: center;
`;

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #ecf0f1;
  font-family: "Andada Pro", serif;
`;
