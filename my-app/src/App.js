import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter, Redirect } from 'react-router-dom'
import AuthApp from './components/AuthApp';
import UnauthApp from './components/UnauthApp';
import Navbar from './components/NavBar/Navbar';
import AuthNavbar from './components/NavBar/AuthNavbar';

function App() {
  const [user, setUser] = useState({});
  const [listings, setListings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = '';
    <Redirect to="/" />
  }

  useEffect(() => {
    fetch('http://localhost:3000/listings')
    .then(res => res.json())
    .then(json => setListings(json))
}, []);
  

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
        .then((user) => setUser(user),
        setLoggedIn(true));
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);

  return (
    <>
    <BrowserRouter>
      {loggedIn ? (
        <>
        <AuthNavbar logOut={logOut} />
        <AuthApp
          setUser={setUser}
          user={user}
          listings={listings}
        />
        </>
        
      ) : (
        <>
        <Navbar />
        <UnauthApp
          setUser={setUser}
          listings={listings}
        />
        </>
      )}
    </BrowserRouter>
   </>
   );
 
}

export default App;
