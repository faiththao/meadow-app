import { useState } from "react";
import styled from "styled-components";
import SavedListings from "./SavedListings";
import YourListings from "./YourListings";

export default function Profile({ user, personalListings, listings, unsave }) {
  const [shownInfo, setShownInfo] = useState(false);
  const [shown, setShown] = useState(false);
  const [showYourListings, setYourListings] = useState(false);
  const { email, first_name, last_name, birthdate, phone } = user;

  function showInfo() {
    setShownInfo((shownInfo) => !shownInfo);
  }

  function savedListings() {
    setShown((shown) => !shown);
  }

  function yourListings() {
    setYourListings((showYourListings) => !showYourListings);
  }

  return (
    <>
      <H2>Profile</H2>
      <MainDiv>
        <Button onClick={showInfo}>Account Details</Button>
        <Button onClick={yourListings}>
          Your Listings
          {showYourListings ? (personalListings.map(listing => (
            <YourListings key={listing.id} listing={listing} />)
            )) : null}
        </Button>
        <Button onClick={savedListings}>
          Saved Listings
          <div>
          {shown ? (
            <SavedListings listings={listings} handleSave={unsave} />
          ) : null}
          </div>
        </Button>
      </MainDiv>
      <Div>
        <Div2>
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
        </Div2>
      </Div>
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
  flex-direction: row;
  //   margin-left: 140px;
  //   width: 205px;
  //   border: solid;
//   justify-content: space evenly;
  display: flex;
  text-align: center;
`;

const Div2 = styled.div`
//   flex-direction: column;
//   justify-space: space evenly;
  text-align: left;
  width: 100%;
`;

// const Container = styled.div`
//   content-align: center;
// //   margin-left: 40px;
// `;

// const Container2 = styled.div`
//   content-align: center;
//   margin-left: 130px;
// `;

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #6f1a07;
  font-family: "Andada Pro", serif;
  font-variant: small-caps;
`;
