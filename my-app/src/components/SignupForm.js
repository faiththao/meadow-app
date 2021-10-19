import { useState } from "react";
import { Button } from "./styledComponents/styledButton";
import { Input } from "./styledComponents/styledInput";
import styled from "styled-components";

export default function SignupForm({ signup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signup({
      email,
      password,
      password_confirmation: passwordConfirmation,
      firstName,
      lastName,
      birthdate,
      phone,
    })
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
    setFirstName('')
    setLastName('')
    setBirthdate('')
    setPhone('')
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="signup">
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <H2>Last Name</H2>
        <Input
          type="text"
          id="last name"
          value={lastName}
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
        <Button type="submit">
          {/* {isLoading ? "Loading..." : "Sign Up"} */}
          Sign Up
        </Button>
      </Form>
    </div>
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