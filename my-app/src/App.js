import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter, Redirect } from 'react-router-dom'
import AuthApp from './components/AuthApp';
import UnauthApp from './components/UnauthApp';
import Navbar from './components/NavBar/Navbar';
import AuthNavbar from './components/NavBar/AuthNavbar';

function App() {
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const signup = (formData) => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          setUsers(data);
          setLoggedIn(true)
          localStorage.setItem("token", data.jwt)
          console.log(res);
        });
      } else {
        return res.json().then((errors) => Promise.reject(errors));
      }
    }, []);
  };
  

  function logOut() {
    setUsers({});
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
        .then((user) => setUsers(user),
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
          setUser={setUsers}
          users={users}
          listings={listings}
          setListings={setListings}
        />
        </>
      ) : (
        <>
        <Navbar />
        <UnauthApp
          setUser={setUsers}
          listings={listings}
          signup={signup}
        />
        </>
      )}
    </BrowserRouter>
   </>
   );
 
}

export default App;
