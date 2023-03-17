import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import { useContext } from 'react';
import UserContext from './UserContext';





function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = UserContext || {}; 

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        // setUser({ username });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    
    <div className="login-card">
  <div className="card-header">
    <div className="log">Login</div>
  </div>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label for="username">Username:</label>
      <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
    </div>
    <div className="form-group">
      <label for="password">Password:</label>
      <input
      type="password"
      id="password"
      autoComplete="current-password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    </div>
    <div className="form-group">
    <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
    </div>
  </form>
</div>

  );
}

export default LoginForm;
