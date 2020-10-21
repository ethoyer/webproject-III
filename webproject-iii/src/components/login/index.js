import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const Login = () => {
  // User State
  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
  });

  // onChange function
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
  };

  // Import firebase
  const firebase = useFirebaseApp();

  // Submit function (Log in user)
  const handleSubmit = e => {
    e.preventDefault();
    // Log in code here.
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(error => {
        // Update the error
        setUser({
          ...user,
          error: error.message,
        })
      })
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
        <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button type="submit">Log in</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
      <a href="/register">Register Account</a>
    </>
  )
};

export default Login;