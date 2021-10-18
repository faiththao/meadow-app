import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthApp from './components/AuthApp';
import UnauthApp from './components/UnauthApp';

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);


  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = '';
  }

  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1
      && token !== 'undefined'
    ) {
      fetch('http://localhost:3000/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);

  return (
    <BrowserRouter>
      {user ? (
        <UnauthApp
          setUser={setUser}

        />
      ) : (
        <AuthApp
          setCurrentUser={setCurrentUser}
          user={user}
          loggedIn={loggedIn}
          logOut={logOut}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
