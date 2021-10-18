import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState();

  return (
    <div>
      <h2>Home is Where the Heart is</h2>
      <input
        type="text"
        placeholder="Enter address, city, or state..."
        value={input}
      />
      <button>Search</button>
    </div>
  );
}
