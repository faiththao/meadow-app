

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
    img_url
  } = listing;
  return (
    <>
      Listings
      <div key={id}>
        <h2> {address} </h2>
        <img src={img_url} alt={img_url} />
        <p> {description} </p>
        <span>
          <p> Bedrooms: {bedrooms} </p>
          <p> Bathrooms: {bathrooms} </p>
          <p> Parking Spaces: {parking} </p>
          <p> Air Conditioning: {ac} </p>
          <p> Washer/Dryer: {washer_dryer} </p>
          <p> Lease Length: {lease} </p>
        </span>
      </div>
    </>
  );
}
