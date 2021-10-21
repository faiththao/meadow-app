import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";
import AddListing from "./pages/AddListing";
import SignupForm from "./components/SignupForm";
import AuthNavbar from "./components/NavBar/AuthNavbar"
import Navbar from "./components/NavBar/Navbar"
import Profile from "./pages/Profile"

function App() {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [listings, setListings] = useState([]);
  const [personalListings, setPersonalListings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = "";
  }

  useEffect(() => {
    fetch("http://localhost:3000/listings/{id}", {
      headers: {
        "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(json => setPersonalListings(json))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then(res => res.json())
    .then(res => setListings(res))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      headers: {
      "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify()
    })
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((json) => setUserData(json));
      // .then(data => console.log(data))
  }, [])

  const postListing = (formData) => {
    fetch("http://localhost:3000/listings", {
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
        setListings(listings.concat(listing))
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
      fetch("http://localhost:3000/auto_login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setUser(user), setLoggedIn(true))
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
          ) : <Navbar /> }
          <Switch>
            <Route exact path="/">
              <Home 
              listings={listings} 
              />
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
            {personalListings.map(listing => (
            <Profile key={listing.id} listing={listing} user={userData} />)
            )}  
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
