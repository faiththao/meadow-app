import { useState } from "react";

export default function LoginForm({setCurrentUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        e.target.reset();
        
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
            },
            body: JSON.stringify({ email, password }),
        })
        .then((res) => res.json())
        .then((res) => {
        localStorage.token = res.jwt;
        setCurrentUser(res.user);
      });
    }
    return (
        <form onSubmit={handleSubmit} className="login">
            <h2 htmlFor="username">Email</h2>
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <h2 htmlFor="password">Password</h2>
            <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button variant="fill" color="primary" type="submit" >
                Login
            </button>
        </form>
    )
}