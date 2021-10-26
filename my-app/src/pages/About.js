import styled from "styled-components";

export default function About() {
  return (
    <Div>
      <H1>About Us</H1>
      <Div2>
      <P>
        At Meadow, our goal is to help not only families and individuals find
        temporary, but also companies find temporary housing for their traveling
        employees. These homes are leased out for long and short stays based on
        how long you will be temporarily living in that area. We hope we can
        help you find the perfect home for you!
      </P>
      <img src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/blog/csm-blog/familywell-being-blog-03_0.jpg?itok=R9s7KRY1"
      alt="family img" 
      />
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  display: block;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const Div2 = styled.div`
display: inline-block;
margin-top: 10px;
height: 20vh;
width: 75vw;
background: #F7F3E3;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #2B2118;
text-align: center;
align-items: center;
`;

const H1 = styled.h1`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #6f1a07;
  font-family: "Andada Pro", serif;
  font-variant: small-caps;
`;

const P = styled.p`
  text-align: center;
  align-items: center;
  margin-top: 30px;
  padding; 10px;
`;

