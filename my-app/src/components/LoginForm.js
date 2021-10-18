import { useState } from "react";
import { Redirect } from "react-router-dom";
import Home from "../pages/Home";

export default function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();

    const user = { email, password };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((response) => {
        localStorage.token = response.jwt;
        setUser(response.user);
        setLoggedIn(true);
      });
  }

  return (
    <div>
      <form onSubmit={handleLogin} className="login">
        <h2 htmlFor="username">Email</h2>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2 htmlFor="password">Password</h2>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button variant="fill" color="primary" type="submit">
          Login
        </button>
      </form>
      {loggedIn ? (<Redirect to='/profile' />) : ("Invalid username or password.")}
      
    </div>
  );
}
