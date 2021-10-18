import { useState } from "react";
import Listings from "./Listings";

export default function Home({ listings }) {
  const [input, setInput] = useState();

  const listingsList = listings.map((listing) => (
    <Listings key={listing.id} listing={listing} />
  ));

  return (
    <div>
      <div className="search-bar">
        <h2>Home is Where the Heart is</h2>
        <input
          type="text"
          placeholder="Enter address, city, or state..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Search</button>
      </div>
      <br />
      {listingsList}
    </div>
  );
}
