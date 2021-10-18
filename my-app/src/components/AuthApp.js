import { Route, Switch } from "react-router";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import AuthNavbar from "./NavBar/AuthNavbar";

export default function AuthApp({ user, listings }) {


  return (
    <>
      <Switch>
      <Route exact path="/">
            <Home listings={listings}/>
        </Route>
        <Route exact path="/profile">
          <Profile user={user} />
        </Route>
      </Switch>
    </>
  );
}
