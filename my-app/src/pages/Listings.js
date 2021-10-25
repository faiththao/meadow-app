import styled from "styled-components";

export default function Listings({ listing }) {
  
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
      <div key={id} className="listing">
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
        <Div>
          <Button>Save</Button>
        </Div>
      </div>
    </>
  );
}

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #6f1a07;
  font-family: "Andada Pro", serif;
`;

export const Button = styled.button`
  background: #F7F3E3;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 20%;
  height: 2rem;
  border: none;
  color: #A8763E;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Div = styled.div`
  text-align: right;
`;

const Img = styled.img`
  text-algin: center;
  width: 100%;
`