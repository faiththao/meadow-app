import { Route, Switch } from "react-router";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

export default function AuthApp({ users, listings }) {
  const renderUser = users.map((user) => {
    <Profile key={user.id} user={user} />;
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home listings={listings} />
        </Route>
        <Route exact path="/profile">
          {renderUser}
        </Route>
      </Switch>
    </>
  );
}
