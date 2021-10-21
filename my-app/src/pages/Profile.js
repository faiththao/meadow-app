import { useState } from "react";
import styled from "styled-components";

export default function Profile({ user }) {
  const [shownInfo, setShownInfo] = useState(false);
  const [shown, setShown] = useState(false);
  const { email, first_name, last_name, birthdate, phone } = user;

  function showInfo() {
    setShownInfo((shownInfo) => !shownInfo);
  }

  function savedListings() {
    setShown((shown) => !shown);
  }

  return (
    <>
      <H2>Profile</H2>
      <MainDiv>
        <Button onClick={showInfo}>Account Details</Button>
        <Button onClick={savedListings}>Saved Listings</Button>
      </MainDiv>
      <Div>
        {shownInfo ? (
          <>
            <p>
              <strong>Email: </strong>
              {email}
            </p>
            <p>
              <strong>First Name: </strong>
              {first_name}
            </p>
            <p>
              <strong>Last Name: </strong>
              {last_name}
            </p>
            <p>
              <strong>Birthdate: </strong>
              {birthdate}
            </p>
            <p>
              <strong>Phone Number: </strong>
              {phone}
            </p>
          </>
        ) : null}
      </Div>
      <div>
        {shown ? (
          <>
            <p>listings</p>
          </>
        ) : null}
      </div>
    </>
  );
}

const Button = styled.button`
  background: #6f1a07;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 15%;
  height: 2rem;
  border: none;
  color: #f7f3e3;
  border-radius: 2rem;
  cursor: pointer;
  font-family: "Andada Pro", serif;
`;

const MainDiv = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Div = styled.div`
  flex-direction: column;
  margin-left: 140px;
  width: 190px;
`;

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #6F1A07;
  font-family: 'Andada Pro', serif;
  font-variant: small-caps;
`;