import { useState } from "react";
import { Route, Switch } from "react-router";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import UnauthNavbar from "./NavBar/UnauthNavbar"
import Listings from "../pages/Listings";

export default function UnauthApp({ setUser }) {

  return (
    <>
    <UnauthNavbar />
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
      <Route exact path="/signup">
        <SignUp setUser={setUser} />
      </Route>
    </Switch>
  </>
  );
}
