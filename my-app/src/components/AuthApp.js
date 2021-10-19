import { Route, Switch } from "react-router";
import { useState } from "react";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import AddListing from "../pages/AddListing";

export default function AuthApp({ users, listings, setListings }) {

  const postListing = (formData) => {
    fetch("http://localhost:3000/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
        console.log(listing);
      });
  };

  // const renderUser = users.map(user => (
  //     <Profile key={user.id} user={user} />
  // ))
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home listings={listings} />
        </Route>
        <Route exact path="/add-listing">
          <AddListing postListing={postListing} />
        </Route>
        <Route exact path="/profile">
          {/* {renderUser} */}
          <Profile />
        </Route>
      </Switch>
    </>
  );
}
