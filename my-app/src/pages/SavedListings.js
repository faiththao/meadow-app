import styled from "styled-components";
import Listings from "./Listings";

export default function SavedListings({ listings, handleSave }) {
    const savedListings = listings.map(listing => (
        <Listings key={listing.id} listing={listing} handleSave={handleSave} /> ))

  return (
    <>
      <Div2>
        <List>
            <br />
          {savedListings}
        </List>
      </Div2>
    </>
  );
}

const Div2 = styled.div`
    flex-direction: column;
  //   justify-space: space evenly;
  text-align: left;
  width: 100%;
  margin-left: -1020px;
  margin-top: 10px;
`;

const List = styled.div`
  // flex-direction: column;
  //   justify-space: space evenly;
  text-align: left;
  width: 90vw;
  display: flex-inline;
  border: solid;
`;
