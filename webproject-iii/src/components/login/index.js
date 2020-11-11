import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import './login.css';
import '../../src/components/header.css'


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
      error: ''
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
    if (user) {
      window.location = '/'; //After successful login, user will be redirected to home.html
    }
  });

  return (
    <>
      <div id="registerbox"><h1 class="login">Log In</h1>
        <form class="form" onSubmit={userLogin}>
          <input type="text" placeholder="Email" name="email" onChange={handleChange} /><br />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} /><br />
          <div><button type="submit">Log in</button></div>
        </form>
        {user.error && <h4>{user.error}</h4>}
        <div class="a"> Not registered? <a href="/register">Create an Account!</a></div>
      </div>
    </>
  )
};

export default Login;
