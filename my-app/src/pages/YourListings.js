import styled from "styled-components";


export default function YourListings({ listing }) {
    const {
        id,
        address,
        description,
        bedrooms,
        bathrooms,
        parking,
        ac,
        washer_dryer,
        lease,
        img_url,
    } = listing;

  return (
    <>
      <Div2>
        <List key={id}>
          <br />
          <Img src={img_url} alt={img_url} />
          <H2> {address} </H2>
          <p> {description} </p>
          <span>
            <p>
              {" "}
              Bedrooms: {bedrooms} Bathrooms: {bathrooms}{" "}
            </p>
            <p> Parking Spaces: {parking} </p>
            <p>
              {" "}
              Air Conditioning: {ac.toString()} Washer/Dryer:{" "}
              {washer_dryer.toString()}
            </p>
            <p> Lease Length: {lease} </p>
          </span>
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
  margin-left: -580px;
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

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #6f1a07;
  font-family: "Andada Pro", serif;
  font-variant: small-caps;
`;

const Img = styled.img`
  text-align: center;
  width: 100%;
`;