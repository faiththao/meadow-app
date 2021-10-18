import { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

export default function SignUp({ setUser, loggedIn }) {
  const [showLogin, setShowLogin] = useState(false);


  const signup = (formData) => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        return res.json().then((user) => {
          setUser(user);
          console.log(res);
        });
      } else {
        return res.json().then((errors) => Promise.reject(errors));
      }
    });
  };


  return (
    <div>
      <h1>Sign Up or Login</h1>
      {showLogin ? (
        <>
          <SignupForm setUser={setUser} signup={signup} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Log In
            </button>
          </p>
        </>
      ) : (
        <>
          <LoginForm setUser={setUser} />
          <br />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Sign Up
            </button>
          </p>
        </>
      )}
    </div>
  );
}
