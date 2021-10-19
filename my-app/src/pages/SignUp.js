import { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { Button } from "../components/styledComponents/styledButton";
import styled from "styled-components";

export default function SignUp({ signup, setUser, user }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <MainDiv>
      <H1>Sign Up or Login</H1>
      {showLogin ? (
        <>
          <SignupForm setUser={setUser} signup={signup} />
          <br />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Log In
            </Button>
          </p>
        </>
      ) : (
        <>
          <LoginForm setUser={setUser} user={user} />
          <br />
          <p>
            Don't have an account? &nbsp;
            <br />
            <Button onClick={() => setShowLogin(true)}>Sign Up</Button>
          </p>
        </>
      )}
    </MainDiv>
  );
}

const H1 = styled.h1`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #2b2118;
  font-family: 'Andada Pro', serif;
`;

const MainDiv = styled.div`
text-align: center;
font-family: 'Andada Pro', serif;
`;