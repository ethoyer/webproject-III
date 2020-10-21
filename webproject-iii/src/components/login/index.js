import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
  };

  const firebase = useFirebaseApp();

  //kogs in user
  const userLogin = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(error => {
        //finds potential errors
        setUser({
          ...user,
          error: error.message,
        })
      })
  }

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = '/'; //After successful login, user will be redirected to home.html
    }
  });

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={userLogin}>
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