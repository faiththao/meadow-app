import { Route, Switch } from "react-router";
import Profile from "../pages/Profile";

export default function AuthApp({ user, setCurrentUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <>
      <Switch>
        <Route exact path="/profile">
          <Profile user={user} />
        </Route>
      </Switch>
    </>
  );
}
