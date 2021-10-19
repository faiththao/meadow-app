import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/styledComponents/styledButton";

export default function AddListing(postListing) {
    const [img_url, setImgUrl] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [parking, setParking] = useState('');
    const [ac, setAc] = useState('');
    const [washer_dryer, setWasherDryer] = useState('');
    const [lease, setLease] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
         postListing({ 
            img_url, 
            address, 
            description, 
            bedrooms, 
            bathrooms, 
            parking,
            ac,
            washer_dryer,
            lease,
        })
        setImgUrl('');
        setAddress('');
        setDescription('');
        setBedrooms('');
        setBathrooms('');
        setParking('');
        setAc('');
        setWasherDryer('');
        setLease('');
    }

    return(
        <>
        <H1>Add Listing</H1>
        <MainDiv>
            <Form onSubmit={handleSubmit} >
                <H2>Image</H2>
                <Input
                    type="text"
                    id="img_url"
                    value={img_url}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
                <H2>Address</H2>
                <Input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <H2>Description</H2>
                <Input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <H2>Bedrooms</H2>
                <Input
                    type="text"
                    id="bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                />
                <H2>Bathrooms</H2>
                <Input
                    type="text"
                    id="bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                />
                <H2>Parking Spaces</H2>
                <Input
                    type="text"
                    id="parking-spaces"
                    value={parking}
                    onChange={(e) => setParking(e.target.value)}
                />
                <H2>Air Conditioning (true/false)</H2>
                <Input
                    type="text"
                    id="ac"
                    value={ac}
                    onChange={(e) => setAc(e.target.value)}
                />
                <H2>Washer/Dryer (true/false)</H2>
                <Input
                    type="text"
                    id="washer/dryer"
                    value={washer_dryer}
                    onChange={(e) => setWasherDryer(e.target.value)}
                />
                <H2>Lease Length</H2>
                <Input
                    type="text"
                    id="lease"
                    value={lease}
                    onChange={(e) => setLease(e.target.value)}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </MainDiv>
        </>
    )
}

const Form = styled.div`
  display: inline-block;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 242vh;
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

const H1 = styled.h1`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #6F1A07;
  font-family: 'Andada Pro', serif;
  font-variant: small-caps;
`;

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #ECF0F1;
  font-family: 'Andada Pro', serif;
  font-variant: small-caps;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #ECF0F1;
  font-size: 1rem;
  font-weight: bold;
  text-align: center:
  margin: center;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #6F1A07;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const MainDiv = styled.div`
text-align: center;
`;