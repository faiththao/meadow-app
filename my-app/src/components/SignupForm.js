import { useState } from "react";
import { Button } from "./styledComponents/styledButton";
import { Input } from "./styledComponents/styledInput";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [created, setCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const production = "https://boiling-waters-59018.herokuapp.com";
  const development = "http://localhost:3000";
  const url =
    process.env.NODE_ENV === "production" ? production : development;

  function createUser(event) {
    event.preventDefault();
    // event.target.reset();

    let user = {
      email,
      password,
      password_confirmation: passwordConfirmation,
      first_name,
      last_name,
      birthdate,
      phone,
    }

    fetch(`${url}/signup`, {
    // fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => console.log(r))
      .then((response) => {
        if (response.status === 'created') {
          setCreated(true);
          setErrorMessage('');
        }
      })
      .catch((response) =>
        setErrorMessage(
          "Uh-oh! It didn't work...Make sure your server is running!"
        )
      );
  }
  

  return (
    <MainDiv>
      {created ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <div className="please-log-in">
            <p>{errorMessage}</p>
          </div>
          <br />
      <Form className="signup">
        <H2 htmlFor="email">Email</H2>
        <Input
          type="text"
          id="email"
          // autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <H2 htmlFor="password">Password</H2>
        <Input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // autoComplete="current-password"
        />
        <H2 htmlFor="password">Confirm Password</H2>
        <Input
          type="text"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          // autoComplete="current-password"
        />
        <H2>First Name</H2>
        <Input
          type="text"
          id="first name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <H2>Last Name</H2>
        <Input
          type="text"
          id="last name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <H2>Birthdate (yyyy/mm/dd)</H2>
        <Input
          type="text"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <h2>Phone Number</h2>
        <Input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <Button type="submit" onClick={createUser}>
          {/* {isLoading ? "Loading..." : "Sign Up"} */}
          Sign Up
        </Button>
      </Form>
      </div>
      )}
    </MainDiv>
  );
}

const Form = styled.div`
  display: inline-block;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 193vh;
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
const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #ECF0F1;
  font-family: 'Andada Pro', serif;
`;

const MainDiv = styled.div`
text-align: center;
`;