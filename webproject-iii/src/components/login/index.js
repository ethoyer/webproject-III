import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
      window.location = '/webproject-III/#/'; //After successful login, user will be redirected to home.html
    }
  });

  return (
    <>
      <div className="formBox"><h1>Log In</h1>
        <form className="form" onSubmit={userLogin}>
          <Form.Control type="text" placeholder="Email" name="email" onChange={handleChange} /><br />
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} /><br />
          <div><Button type="submit">Log in</Button></div>
        </form>
        {user.error && <h4>{user.error}</h4>}
        <div class="a"> Not registered? <Link to="/register">Create an Account!</Link></div>
      </div>
    </>
  )
};

export default Login;
