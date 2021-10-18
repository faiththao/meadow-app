import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function UnauthApp({ setUser, listings }) {

  return (
    <>
    <Switch>
        <Route exact path="/">
            <Home listings={listings} />
        </Route>
      <Route exact path="/signup">
        <SignUp setUser={setUser} />
      </Route>
    </Switch>
  </>
  );
}
