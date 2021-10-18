import { useState } from "react";

export default function SignupForm({ signup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signup({
      email,
      password,
      password_confirmation: passwordConfirmation,
      firstName,
      lastName,
      birthdate,
      phone,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="signup">
      <h2 htmlFor="email">Email</h2>
      <input
        type="text"
        id="email"
        // autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h2 htmlFor="password">Password</h2>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        // autoComplete="current-password"
      />
      <h2 htmlFor="password">Confirm Password</h2>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        // autoComplete="current-password"
      />
      <h2>First Name</h2>
      <input 
      type="name"
      id="first name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      />
      <h2>Last Name</h2>
      <input 
      type="name"
      id="last name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      />
      <h2>Birthdate (yyyy/mm/dd)</h2>
      <input 
      type="birthdate"
      id="birthdate"
      value={birthdate}
      onChange={(e) => setBirthdate(e.target.value)}
      />
      <h2>Phone Number</h2>
      <input 
      type="phone"
      id="phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">
        {/* {isLoading ? "Loading..." : "Sign Up"} */}
        Sign Up
      </button>
    </form>
  );
}
