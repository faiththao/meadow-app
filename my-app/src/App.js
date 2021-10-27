import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";
import AddListing from "./pages/AddListing";
import SignupForm from "./components/SignupForm";
import AuthNavbar from "./components/NavBar/AuthNavbar";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [listings, setListings] = useState([]);
  const [personalListings, setPersonalListings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [listingSaved, setListingSaved] = useState([]);

  const production = "https://boiling-waters-59018.herokuapp.com/";
  const development = "http://localhost:3000/";
  const url =
    process.env.NODE_ENV === "production" ? production : development;

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = "";
  }

  function addSave(listingToSave) {
    const listingIsSaved = listingSaved.find(
      (listing) => listing.id === listingToSave.id
    );
    if (!listingIsSaved) {
      setListingSaved([...listingSaved, listingToSave]);
    }
  }

  function unsave(listingToUnsave) {
    setListingSaved((listingSaved) =>
      listingSaved.filter((listing) => listing.id !== listingToUnsave)
    );
  }

  useEffect(() => {
    fetch(`${url}/listings/{id}`, {
    // fetch("http://localhost:3000/listings/{id}", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((json) => setPersonalListings(json));
    // .then(json => console.log(json))
  }, []);

  useEffect(() => {
    fetch(`${url}/listings`)
      // fetch('http://localhost:3000/listings')
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((res) => setListings(res));
  }, []);

  useEffect(() => {
    fetch(`${url}/me`, {
    // fetch("http://localhost:3000/me", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((json) => setUserData(json));
    // .then(data => console.log(data))
  }, []);

  const postListing = (formData) => {
    fetch(`${url}/listings`, {
    // fetch("http://localhost:3000/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((errors) => Promise.reject(errors));
        }
      })
      .then((listing) => {
        setListings(listings.concat(listing));
        // console.log(listing);
      });
  };

  useEffect(() => {
    const token = localStorage.token;
    if (
      typeof token !== "undefined" &&
      token.length > 1 &&
      token !== "undefined"
    ) {
      fetch(`${url}/auto_login`, {
      // fetch("http://localhost:3000/auto_login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setUser(user), setLoggedIn(true));
      // console.log(user));
    } else {
      console.log("No token found, try logging in!");
    }
  }, []);

  return (
    <>
      <div className="main-div">
        <BrowserRouter>
          {loggedIn ? (
            <>
              <AuthNavbar logOut={logOut} />
            </>
          ) : (
            <Navbar />
          )}
          <Switch>
            <Route exact path="/meadow-app-js">
              <Home listings={listings} handleSave={addSave} />
            </Route>
            <Route exact path="/login">
              {loggedIn ? (
                <Redirect to="/" />
              ) : (
                <LoginForm setCurrentUser={setCurrentUser} />
              )}
            </Route>

            <Route exact path="/signup">
              {loggedIn ? <Redirect to="/" /> : <SignupForm />}
            </Route>

            <Route exact path="/add-listing">
              <AddListing postListing={postListing} />
            </Route>

            <Route exact path="/profile">
              <Profile
                user={userData}
                personalListings={personalListings}
                listings={listingSaved}
                unsave={unsave}
              />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
