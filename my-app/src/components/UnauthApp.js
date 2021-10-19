import { Route, Switch } from "react-router";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function UnauthApp({ setUser, listings, signup }) {

  return (
    <>
    <Switch>
        <Route exact path="/">
            <Home listings={listings} />
        </Route>
      <Route exact path="/signup">
        <SignUp setUser={setUser} signup={signup} />
      </Route>
    </Switch>
  </>
  );
}
